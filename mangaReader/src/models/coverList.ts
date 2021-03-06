interface Relationship {
  id: string;
  type: string;
}

interface Attributes {
  description: string;
  volume?: string;
  fileName: string;
  locale: string;
  createdAt: string;
  updatedAt: string;
  version: number;
}

interface Datum {
  id: string;
  type: string;
  attributes: Attributes;
  relationships: Relationship[];
}

export interface CoverListObject {
  result: string;
  response: string;
  data: Datum[];
  limit: number;
  offset: number;
  total: number;
}
