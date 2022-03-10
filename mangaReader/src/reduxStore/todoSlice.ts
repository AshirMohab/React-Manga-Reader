import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./rtkStore";
import { MangaPopularityState, Popularity } from "./types";

const initialState: Popularity[] = [];

export const mangaSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addFavourite: (state, task) => {
      return [
        ...state,
        {
          id: String(state.length),
          task: task.payload,
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
      ) =>
        status === newStatus ? MangaPopularityState.NOTINTERESTED : newStatus;

      return [
        ...state.map((todo) =>
          todo.id !== id
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
export const selectTodos = (state: RootState) => state.todos;
export const selectTodoById = (state: RootState, id: string) =>
  state.todos.find((todo: { id: string }) => todo.id === id);

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default mangaSlice.reducer;
