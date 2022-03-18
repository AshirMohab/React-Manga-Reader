export enum MangaPopularityState {
  FAVOURITE = "favourite",
  NOTINTERESTED = "dislike",
  CURIOUS = "curious",
}

export type MangaPopularity = {
  mangaID: string;
  title: string;
  coverID: string;
  status: MangaPopularityState;
};

export enum PopularAction {
  ADD_FAVOURITE = "ADD_FAVOURITE",
  SET_STATUS = "SET_STATUS",
}

export type ActionTypes =
  | {
      type: typeof PopularAction.ADD_FAVOURITE;
      payload: { id: string; title: string; name: string };
    }
  | {
      type: typeof PopularAction.SET_STATUS;
      payload: { status: PopularAction; id: string };
    };
