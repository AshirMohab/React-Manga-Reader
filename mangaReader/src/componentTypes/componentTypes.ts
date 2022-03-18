import { MouseEventHandler, ReactChild, ReactNode } from "react";

export type ButtonProp = {
  children: ReactNode;
  onClickProp: MouseEventHandler<HTMLButtonElement>;
};

export type MangaCardProp = {
  id: string;
};
export type ChapterCardProp = {
  id: string;
};

export type singleMangaProp = {
  mangaId: string;
  title: string;
  coverID: string;
};

export type HeadProps = {
  tags: string[];
};

export type NavProps = {
  name: string;
};
