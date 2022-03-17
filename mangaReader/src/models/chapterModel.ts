export interface ChapterObject {
  result: string;
  response: string;
  data: ChapterData;
}

export interface ChapterData {
  id: string;
  type: string;
  attributes: Attributes;
  relationships: Relationship[];
}

interface Relationship {
  id: string;
  type: string;
  related: string;
  attributes: Attributes2;
}

interface Attributes2 {}

interface Attributes {
  title: string;
  volume: string;
  chapter: string;
  pages: number;
  translatedLanguage: string;
  uploader: string;
  externalUrl: string;
  version: number;
  createdAt: string;
  updatedAt: string;
  publishAt: string;
  readableAt: string;
}
