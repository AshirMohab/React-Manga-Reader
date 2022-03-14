import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reduxStore/rtkStore";
import { addFavourite, setStatus } from "../reduxStore/mangaSlice";
import { MangaPopularityState } from "../reduxStore/types";

export default function PopularRtk() {
  const popularMangas = useSelector(
    (state: RootState) => state.mangaPopylarities,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      addFavourite({
        id: `32d76d19-8a05-4db0-9fc2-e0b0648fe9d0`,
        coverUrl: `4d709522-25f5-4ac0-9b6c-3798a223c7ae.jpg`,
        author: `BOB`,
      }),
    );
  }, []);

  return (
    <div>
      Favourites
      {popularMangas?.[0]?.id}
      <div>{popularMangas?.[0]?.author}</div>
    </div>
  );
}
