import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { CoverByIDPromise, getMangasPromiseID } from "../ApiCalls/apiCalls";
import { CoverData } from "../models/covers";
import { MangaData } from "../models/mangaModel";
import { MangaCardProp } from "../componentTypes/componentTypes";
import ButtonComponent from "./Button";

export function MangaCardReactQueryComponent() {
  const params = useParams();
  const mangaID = params.mangaID as string;

  const mangaQuery = useQuery<MangaData, Error>([`manga`, mangaID], () =>
    getMangasPromiseID(mangaID),
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
    <div className="grid md:grid-cols-2 sm:grid-cols-1 p-4">
      <div className="p-6 rounded-lg">
        <img
          src={`https://uploads.mangadex.org/covers/${mangaData?.id}/${coverData?.attributes?.fileName}`}
          width="100%"
          height="100%"
          alt={mangaData?.attributes?.title.en}
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-4 p-10 bg-slate-50 rounded-xl">
        <strong>Authour: {mangaData?.attributes?.title.en}</strong>{" "}
        <strong>Status: {mangaData?.attributes?.status}</strong>{" "}
        <strong>Date: {mangaData?.attributes?.createdAt}</strong>
        <strong>Description: {mangaData?.attributes?.description?.en}</strong>
        <strong>
          Description: {mangaData?.attributes?.publicationDemographic}
        </strong>
        <strong>Catergories: {mangaData?.attributes?.contentRating}</strong>
        <div className="flex flex-row gap-2">
          <ButtonComponent
            children="Add to favourites"
            onClickProp={() => console.log("The blue sky")}
          />
          <ButtonComponent
            children="Read First"
            onClickProp={() => console.log("The blue sky")}
          />
          <ButtonComponent
            children="Read Last"
            onClickProp={() => console.log("The blue sky")}
          />
        </div>
      </div>
    </div>
  );
}
