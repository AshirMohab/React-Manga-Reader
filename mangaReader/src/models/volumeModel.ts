export interface MangaVolumeData {
  result: string;
  volumes: MangaVolumes;
}

export interface MangaVolumes {
  [key: number]: Volume;
}

interface Volume {
  volume: string;
  count: number;
  chapters: Chapters;
}

interface Chapters {
  [key: number]: Chapter;
}

interface Chapter {
  chapter: string;
  id: string;
  others: string[];
  count: number;
}
