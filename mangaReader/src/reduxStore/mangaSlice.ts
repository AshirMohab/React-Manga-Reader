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
    setStatus: (
      state,
      action: PayloadAction<{ id: string; status: MangaPopularityState }>,
    ) => {
      const { id, status } = action.payload;
      const updateStatus = (
        status: MangaPopularityState,
        newStatus: MangaPopularityState,
      ) => (status === newStatus ? MangaPopularityState.CURIOUS : newStatus);

      return [
        ...state.map((todo) =>
          todo.mangaID !== id
            ? todo
            : { ...todo, status: updateStatus(todo.status, status) },
        ),
      ];
    },
  },
});

export const { addFavourite, setStatus } = mangaSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPopularMangas = (state: RootState) =>
  state.mangaPopylarities;
export const selectPopularMangasID = (state: RootState, id: string) =>
  state.mangaPopylarities.find(
    (manga: { mangaID: string }) => manga.mangaID === id,
  );

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default mangaSlice.reducer;
