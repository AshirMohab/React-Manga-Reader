import { useQuery } from "react-query";
import {
  CoverByIDPromise,
  getMangasPromise,
  getMangasPromiseID,
} from "../ApiCalls/apiCalls";
import { CoverData } from "../models/covers";
import { MangaData, MangaObject } from "../models/mangaModel";
import { singleMangaProp } from "../props/componentProps";
import ButtonComponent from "./Button";

const SingleMangaComponent = (singleManga: singleMangaProp) => {
  const { mangaId, title, coverFileName } = singleManga;

  return (
    <div className="flex flex-col shadow rounded-2xl p-8 mb-4 bg-white">
      <h5 className="text-lg font-bold m-2">{title}</h5>
      <img
        src={`https://uploads.mangadex.org/covers/${mangaId}/${coverFileName}`}
        width="100%"
        height="auto"
      />
      <div className="flex flex-col buttons-container">
        <ButtonComponent name="Add to Favourites" />
        <ButtonComponent name="I am curious" />
        <ButtonComponent name="Not interested" />
      </div>
    </div>
  );
};

export default function MangaComponent() {
  const mangaQuery = useQuery<MangaData, Error>(`manga`, () =>
    getMangasPromiseID(`789642f8-ca89-4e4e-8f7b-eee4d17ea08b`),
  );

  // const mangaList = useQuery<MangaObject, Error>(`mangaList`, () =>
  //   getMangasPromise(),
  // );

  // const mangasList = mangaList.data;

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
    <div className="h-[100%] m-6 md:grid md:grid-cols-3 gap-16 md:grid-rows-2 justify-center flex flex-row">
      <div>
        <SingleMangaComponent
          mangaId={mangaData?.id}
          title={mangaData?.attributes?.title?.en}
          coverFileName={coverData?.attributes?.fileName}
        />
      </div>
    </div>
  );
}
