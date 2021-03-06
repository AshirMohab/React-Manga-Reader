import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reduxStore/rtkStore";
import { useQuery } from "react-query";
import { CoverByIDPromise } from "../ApiCalls/apiCalls";
import { singleMangaProp } from "../componentTypes/componentTypes";
import { CoverData } from "../models/covers";
import ButtonComponent from "./Button";
import { useNavigate } from "react-router-dom";

const FavouriteMangaComponent = (props: singleMangaProp) => {
  const { mangaId, title, coverID } = props;
  const navigate = useNavigate();
  const coverQuery = useQuery<CoverData, Error>(
    [`cover`, coverID],
    () => CoverByIDPromise(coverID),
    { enabled: !!coverID },
  );

  const coverData = coverQuery.data;
  const coverIsLoading = coverQuery.isLoading;
  const coverIsSuccess = coverQuery.isSuccess;
  const coverIsError = coverQuery.isError;
  return (
    <div>
      {coverIsLoading && <div>Cover is still loading</div>}
      {coverIsSuccess && (
        <button
          type="button"
          className="flex flex-col shadow-md rounded-2xl p-8 mb-4 bg-white hover:shadow-lg hover:shadow-black hover:cursor-pointer"
          onClick={() => navigate(`manga-details/${mangaId}`)}
        >
          <h2 className="text-lg font-bold m-2">{title}</h2>
          <img
            src={`https://uploads.mangadex.org/covers/${mangaId}/${coverData?.attributes.fileName}`}
            width="100%"
            height="auto"
            alt={coverData?.attributes.fileName}
          />
        </button>
      )}
      {coverIsError && <div>Error loading cover</div>}
    </div>
  );
};

export default function PopularRtk() {
  const popularMangas = useSelector(
    (state: RootState) => state.mangaPopularities,
  );

  return (
    <div>
      {popularMangas[0] !== null && (
        <div>
          <h1 className="text-lg font-bold p-4 justify-center">
            Favourite Manga
          </h1>
          <div className="grid md:grid-cols-4 md:grid-rows-5 md:flex-row  sm:grid-cols-1 sm:flex-col gap-3 m-4 ">
            {popularMangas.map((manga) => {
              return (
                <FavouriteMangaComponent
                  mangaId={manga.mangaID}
                  title={manga.title}
                  coverID={manga.coverID}
                  key={manga.mangaID}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
