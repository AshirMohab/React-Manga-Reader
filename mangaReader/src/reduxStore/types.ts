export enum MangaPopularityState {
  FAVOURITE = "favourite",
  NOTINTERESTED = "dislike",
  CURIOUS = "curious",
}

export type MangaPopularity = {
  id: string;
  author: string;
  coverUrl: string;
  status: MangaPopularityState;
};

export enum PopularAction {
  ADD_FAVOURITE = "ADD_FAVOURITE",
  SET_STATUS = "SET_STATUS",
}

export type ActionTypes =
  | {
      type: typeof PopularAction.ADD_FAVOURITE;
      payload: { id: string; title: string; author: string };
    }
  | {
      type: typeof PopularAction.SET_STATUS;
      payload: { status: PopularAction; id: string };
    };
