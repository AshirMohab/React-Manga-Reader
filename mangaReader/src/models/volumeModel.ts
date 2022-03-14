export interface MangaVolumeData {
  result: string;
  volumes: Volumes;
}

interface Volumes {
  property1: Property12;
  property2: Property12;
}

interface Property12 {
  volume: string;
  count: number;
  chapters: Chapters;
}

interface Chapters {
  property1: Property1;
  property2: Property1;
}

interface Property1 {
  chapter: string;
  id: string;
  others: string[];
  count: number;
}
