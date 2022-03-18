import { useQuery } from "react-query";
import { Navigate, useNavigate } from "react-router-dom";
import {
  CoverByIDPromise,
  getMangaPromise,
  getMangasPromiseID,
} from "../ApiCalls/apiCalls";
import { CoverData } from "../models/covers";
import { MangaData, MangaObject } from "../models/mangaModel";
import { singleMangaProp } from "../componentTypes/componentTypes";
import ButtonComponent from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../reduxStore/mangaSlice";
import { RootState, rtkstore } from "../reduxStore/rtkStore";
import { Store } from "react-notifications-component";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

const SingleMangaComponent = (props: singleMangaProp) => {
  const { mangaId, title, coverID } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isFavourite = useSelector((state: RootState) =>
    state.mangaPopularities.some((manga) => manga.mangaID === mangaId),
  );

  const coverQuery = useQuery<CoverData, Error>(
    [`cover`, coverID],
    () => CoverByIDPromise(coverID),
    { enabled: !!coverID },
  );

  function handleFavouriteClick() {
    if (isFavourite) {
      dispatch(
        removeFavourite({
          id: mangaId,
        }),
      ),
        Store.addNotification({
          title: "Removed from Favourites",
          message: `${title} has been removed from favourites`,
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 2000,
            onScreen: true,
          },
        });
    } else {
      dispatch(
        addFavourite({
          mangaID: mangaId,
          coverID: coverID,
          title: title,
        }),
      ),
        Store.addNotification({
          title: "Added to Favourites",
          message: `${title} has been added to favourites`,
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 3000,
            onScreen: true,
          },
        });
    }
  }
  const coverData = coverQuery.data;
  const coverIsLoading = coverQuery.isLoading;
  const coverIsSuccess = coverQuery.isSuccess;
  const coverIsError = coverQuery.isError;

  return (
    <div>
      {coverIsLoading && <div>Cover is still loading</div>}
      {coverIsSuccess && (
        <div className="flex flex-col h-full shadow-md rounded-2xl p-8 mb-4 bg-white hover:shadow-lg hover:shadow-black hover:cursor-pointer">
          <h5 className="text-lg font-bold m-2">{title}</h5>
          <img
            src={`https://uploads.mangadex.org/covers/${mangaId}/${coverData?.attributes.fileName}`}
            width="100%"
            height="auto"
            alt={coverData?.attributes.fileName}
          />
          <div className="flex flex-col buttons-container pt-3 mt-auto text-transparent">
            <button onClick={() => handleFavouriteClick()} className="ml-auto">
              {isFavourite ? (
                <MdOutlineFavorite className="h-8 w-8 text-pink-400" />
              ) : (
                <MdOutlineFavoriteBorder className="h-8 w-8 text-slate-400" />
              )}
              Favourite
            </button>
            <ButtonComponent
              children={"Read Manga"}
              onClickProp={() => navigate(`manga-details/${mangaId}`)}
            />
          </div>
        </div>
      )}
      {coverIsError && <div>Error loading cover</div>}
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
      <div className="grid md:grid-cols-4 md:grid-rows-5 md:flex-row  sm:grid-cols-1 sm:flex-col gap-x-4 gap-y-8 m-4">
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
      {isError && <div> Error getting manga Data</div>}
    </div>
  );
}
