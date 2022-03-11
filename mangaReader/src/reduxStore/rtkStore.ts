import { configureStore } from "@reduxjs/toolkit";
import mangaPopularityReducer from "./todoSlice";

export const rtkstore = configureStore({
  reducer: {
    mangaPopylarities: mangaPopularityReducer,
  },
});

export type AppDispatch = typeof rtkstore.dispatch;
export type RootState = ReturnType<typeof rtkstore.getState>;
