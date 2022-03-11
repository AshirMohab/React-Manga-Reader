import { configureStore } from "@reduxjs/toolkit";
import mangaPopularityReducer from "./mangaSlice";

export const rtkstore = configureStore({
  reducer: {
    mangaPopylarities: mangaPopularityReducer,
  },
});

export type AppDispatch = typeof rtkstore.dispatch;
export type RootState = ReturnType<typeof rtkstore.getState>;
