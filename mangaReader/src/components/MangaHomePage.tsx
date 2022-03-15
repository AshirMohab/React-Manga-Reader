import { useQuery } from "react-query";
import {
  CoverByIDPromise,
  getMangaPromise,
  getMangasPromiseID,
} from "../ApiCalls/apiCalls";
import { CoverData } from "../models/covers";
import { MangaData, MangaObject } from "../models/mangaModel";
import { singleMangaProp } from "../props/componentTypes";
import ButtonComponent from "./Button";

const SingleMangaComponent = (singleManga: singleMangaProp) => {
  const { mangaId, title, coverID } = singleManga;
  const coverQuery = useQuery<CoverData, Error>(
    [`cover`, coverID],
    () => CoverByIDPromise(coverID),
    { enabled: !!coverID },
  );
  const coverData = coverQuery.data;
  console.log(coverData);
  return (
    <div className="flex flex-col shadow rounded-2xl p-8 mb-4 bg-white">
      <h5 className="text-lg font-bold m-2">{title}</h5>
      <img
        src={`https://uploads.mangadex.org/covers/${mangaId}/${coverData?.attributes.fileName}`}
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
  const mangaListQuery = useQuery<MangaData[], Error>(`mangaList`, () =>
    getMangaPromise(),
  );
  const mangaListData = mangaListQuery.data;

  const isSuccess = mangaListQuery.isSuccess;
  return (
    <div>
      <div>
        {isSuccess &&
          mangaListData?.map((manga) => {
            return (
              <SingleMangaComponent
                mangaId={manga?.id}
                title={manga?.attributes?.title?.en}
                coverID={
                  manga?.relationships.find(({ type }) => type === `cover_art`)
                    ?.id || ""
                }
                key={manga?.id}
              />
            );
          })}
      </div>
    </div>
  );
}
