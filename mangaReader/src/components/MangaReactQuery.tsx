import { useQuery } from "react-query";
import { CoverByIDPromise, getMangasPromiseID } from "../ApiCalls/apiCalls";
import { CoverData } from "../models/covers";
import { MangaData } from "../models/mangaModel";
import { MangaCardProp } from "../props/componentTypes";
import ButtonComponent from "./Button";

export function MangaCardReactQueryComponent(Manga: MangaCardProp) {
  const { id } = Manga;
  const mangaQuery = useQuery<MangaData, Error>(`manga`, () =>
    getMangasPromiseID(id),
  );

  const mangaData = mangaQuery.data;
  const coverID: string =
    mangaData?.relationships.find(({ type }) => type === `cover_art`)?.id || "";

  const coverQuery = useQuery<CoverData, Error>(
    [`cover`, coverID],
    () => CoverByIDPromise(coverID),
    { enabled: !!coverID },
  );
  const coverData = coverQuery.data;

  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1">
      <div className="p-6">
        <h1>{mangaData?.attributes?.title.en}</h1>
        <img
          src={`https://uploads.mangadex.org/covers/${mangaData?.id}/${coverData?.attributes?.fileName}`}
          width="50%"
          height="100%"
        />
      </div>
      <div className="flex flex-col gap-4">
        <strong>Authour: {mangaData?.attributes?.title.en}</strong>{" "}
        <strong>Status: {mangaData?.attributes?.status}</strong>{" "}
        <strong>Date: {mangaData?.attributes?.createdAt}</strong>
        <strong>Description: {mangaData?.attributes?.description?.en}</strong>
        <ButtonComponent name="Add to favourites" />
      </div>
      <div></div>
    </div>
  );
}
