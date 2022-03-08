export interface MangaObject {
  result: string;
  response: string;
  data: Data;
}

interface Data {
  id: string;
  type: string;
  attributes: Attributes2;
  relationships: Relationship[];
}

interface Relationship {
  id: string;
  type: string;
  related?: string;
}

interface Attributes2 {
  title: Title;
  altTitles: AltTitle[];
  description: Title;
  isLocked: boolean;
  links: Links;
  originalLanguage: string;
  lastVolume?: any;
  lastChapter: string;
  publicationDemographic: string;
  status: string;
  year?: any;
  contentRating: string;
  tags: Tag[];
  state: string;
  chapterNumbersResetOnNewVolume: boolean;
  createdAt: string;
  updatedAt: string;
  version: number;
  availableTranslatedLanguages: string[];
}

interface Tag {
  id: string;
  type: string;
  attributes: Attributes;
  relationships: any[];
}

interface Attributes {
  name: Title;
  description: any[];
  group: string;
  version: number;
}

interface Links {
  al: string;
  ap: string;
  bw: string;
  kt: string;
  mu: string;
  amz: string;
  cdj: string;
  ebj: string;
  mal: string;
  engtl: string;
}

interface AltTitle {
  uk?: string;
  en?: string;
  ru?: string;
  ja?: string;
  "zh-hk"?: string;
  "zh-ro"?: string;
}

interface Title {
  en: string;
}
