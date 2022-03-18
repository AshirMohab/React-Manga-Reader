import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./rtkStore";
import { MangaPopularityState, MangaPopularity } from "./types";

const initialState: MangaPopularity[] = [];

export const mangaSlice = createSlice({
  name: "Manga Popularity",
  initialState,
  reducers: {
    addFavourite: (
      state,
      action: PayloadAction<{
        mangaID: string;
        coverID: string;
        title: string;
      }>,
    ) => {
      if (state.some((manga) => manga.mangaID === action.payload.mangaID)) {
        return state;
      }
      return [
        ...state,
        {
          mangaID: action.payload.mangaID,
          coverID: action.payload.coverID,
          title: action.payload.title,
          status: MangaPopularityState.FAVOURITE,
        },
      ];
    },
    removeFavourite: (state, action: PayloadAction<{ id: string }>) =>
      state.filter((manga) => manga.mangaID !== action.payload.id),
  },
});

export const { addFavourite, removeFavourite } = mangaSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPopularMangas = (state: RootState) =>
  state.mangaPopularities;
export const selectPopularMangasID = (state: RootState, id: string) =>
  state.mangaPopularities.find(
    (manga: { mangaID: string }) => manga.mangaID === id,
  );

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default mangaSlice.reducer;
