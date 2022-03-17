import { useQuery } from "react-query";
import { Navigate, useNavigate } from "react-router-dom";
import {
  CoverByIDPromise,
  getMangaPromise,
  getMangasPromiseID,
} from "../ApiCalls/apiCalls";
import { CoverData } from "../models/covers";
import { MangaData, MangaObject } from "../models/mangaModel";
import { singleMangaProp } from "../props/componentTypes";
import ButtonComponent from "./Button";

const SingleMangaComponent = (props: singleMangaProp) => {
  const { mangaId, title, coverID } = props;
  const navigate = useNavigate();

  const coverQuery = useQuery<CoverData, Error>(
    [`cover`, coverID],
    () => CoverByIDPromise(coverID),
    { enabled: !!coverID },
  );
  const coverData = coverQuery.data;
  return (
    <div className="flex flex-col shadow-lg rounded-2xl p-8 mb-4 bg-white hover:shadow-2xl hover:shadow-black hover:cursor-pointer">
      <h5 className="text-lg font-bold m-2">{title}</h5>
      <img
        src={`https://uploads.mangadex.org/covers/${mangaId}/${coverData?.attributes.fileName}`}
        width="100%"
        height="auto"
        alt={coverData?.attributes.fileName}
        // onClick={navigate(`manga-details/${mangaId}`)}
      />
      <div className="flex flex-col buttons-container pt-3">
        <ButtonComponent
          children={"Read Manga"}
          onClickProp={() => navigate(`manga-details/${mangaId}`)}
        />
        <ButtonComponent
          children={"Add to Favourites"}
          onClickProp={getMangaPromise}
        />
      </div>
    </div>
  );
};

export default function MangaComponent() {
  const mangaListQuery = useQuery<MangaData[], Error>(`mangaList`, () =>
    getMangaPromise(),
  );
  const mangaListData = mangaListQuery.data;

  const isLoading = mangaListQuery.isLoading;
  const isSuccess = mangaListQuery.isSuccess;
  const isError = mangaListQuery.isError;

  return (
    <div>
      {isLoading && <div> is loading</div>}
      <div className="grid md:grid-cols-4 md:grid-rows-5 md:flex-row  sm:grid-cols-1 sm:flex-col gap-3 m-4">
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
      {isError && <div> eroroprfp</div>}
    </div>
  );
}
