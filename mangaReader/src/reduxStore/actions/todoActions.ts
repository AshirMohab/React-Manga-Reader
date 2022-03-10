import { ActionTypes, TodoAction, TodoState } from "../types";

export const addTodo = (task: string): ActionTypes => ({
  type: TodoAction.ADD_TODO,
  payload: task,
});

export const setTodoState = (id: string, status: TodoState): ActionTypes => ({
  type: TodoAction.SET_STATUS,
  payload: { status, id },
});
