import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

export const rtkstore = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export type AppDispatch = typeof rtkstore.dispatch;
export type RootState = ReturnType<typeof rtkstore.getState>;
