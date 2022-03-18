import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { CoverByIDPromise, getMangasPromiseID } from "../ApiCalls/apiCalls";
import { CoverData } from "../models/covers";
import { MangaData } from "../models/mangaModel";
import { MangaCardProp } from "../componentTypes/componentTypes";
import ButtonComponent from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../reduxStore/mangaSlice";
import { Store } from "react-notifications-component";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { RootState } from "../reduxStore/rtkStore";

export function MangaCardReactQueryComponent() {
  const params = useParams();
  const mangaID = params.mangaID as string;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mangaQuery = useQuery<MangaData, Error>([`manga`, mangaID], () =>
    getMangasPromiseID(mangaID),
  );

  const isFavourite = useSelector((state: RootState) =>
    state.mangaPopularities.some((manga) => manga.mangaID === mangaID),
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
  const title = mangaData?.attributes?.title.en || "";
  function handleFavouriteClick() {
    if (isFavourite) {
      dispatch(
        removeFavourite({
          id: mangaID,
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
          mangaID: mangaID,
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
        <div className="flex flex-row p-2 gap-1 text-xl font-bold">
          <h1>Title: </h1> <p>{title}</p>
        </div>
        <div className="flex flex-row p-2 gap-1 font-medium">
          <h2>Status: </h2> <p> {mangaData?.attributes?.status}</p>
        </div>
        <div className="flex flex-row p-2 gap-1 text-lg">
          <h3>Start Date:</h3>
          <p> {mangaData?.attributes?.createdAt.split("T")[0]}</p>
        </div>

        <div className="flex flex-row p-2 gap-1 text-lg font-semibold">
          <h4>Description: </h4> <p> {mangaData?.attributes?.description.en}</p>
        </div>
        <div className="flex flex-row p-2 gap-1 text-lg font-medium">
          <h5>Publication: </h5>{" "}
          <p> {mangaData?.attributes?.publicationDemographic}</p>
        </div>
        <div className="flex flex-row p-2 gap-1 text-lg font-bold">
          <h6>Catergories: </h6> <p> {mangaData?.attributes?.contentRating}</p>
        </div>
        <div className="flex flex-row gap-2">
          <button
            onClick={() => handleFavouriteClick()}
            name="add-favourite"
            className="text-transparent"
          >
            {isFavourite ? (
              <MdOutlineFavorite className="h-12 w-12 text-pink-400" />
            ) : (
              <MdOutlineFavoriteBorder className="h-12 w-12 text-pink-400" />
            )}
            Favourite
          </button>

          <ButtonComponent
            children="Read First"
            onClickProp={() => navigate("/")}
          />
        </div>
      </div>
    </div>
  );
}
