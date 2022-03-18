import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { CoverByIDPromise, getMangasPromiseID } from "../ApiCalls/apiCalls";
import { CoverData } from "../models/covers";
import { MangaData } from "../models/mangaModel";
import { MangaCardProp } from "../componentTypes/componentTypes";
import ButtonComponent from "./Button";
import { useDispatch } from "react-redux";
import { addFavourite } from "../reduxStore/mangaSlice";
import { Store } from "react-notifications-component";

export function MangaCardReactQueryComponent() {
  const params = useParams();
  const mangaID = params.mangaID as string;
  const dispatch = useDispatch();

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
  const title = mangaData?.attributes?.title.en || "";
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
        <strong>Authour: {title}</strong>{" "}
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
            onClickProp={() => {
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
            }}
          />
          <ButtonComponent
            children="Read First"
            onClickProp={() => console.log("The blue sky")}
          />
        </div>
      </div>
    </div>
  );
}
