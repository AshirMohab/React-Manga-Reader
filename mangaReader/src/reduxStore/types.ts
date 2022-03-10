export enum MangaPopularityState {
  FAVOURITE = "favourite",
  NOTINTERESTED = "dislike",
  CURIOUS = "curious",
}

export type Popularity = {
  id: string;
  task: string;
  status: MangaPopularityState;
};

export enum PopularAction {
  ADD_FAVOURITE = "ADD_FAVOURITE",
  SET_STATUS = "SET_STATUS",
}

export type ActionTypes =
  | { type: typeof PopularAction.ADD_FAVOURITE; payload: string }
  | {
      type: typeof PopularAction.SET_STATUS;
      payload: { status: PopularAction; id: string };
    };
