import { useEffect, useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  UseQueryResult,
} from "react-query";
import { retry } from "rxjs";
import {
  CoverByIDPromise,
  getCoverListByID,
  getMangasPromiseID,
} from "../ApiCalls/apiCalls";
import { CoverData, CoverObject, Relationship } from "../models/covers";
import { MangaData, MangaObject } from "../models/mangaModel";
import MangaComponent from "./MangaID";

export function MangaCardReactQueryComponent() {
  const mangaQuery = useQuery<MangaData, Error>(`manga`, () =>
    getMangasPromiseID(`789642f8-ca89-4e4e-8f7b-eee4d17ea08b`),
  );

  const mangaData = mangaQuery.data;
  const coverID: string =
    mangaData?.relationships.find(({ type }) => type === `cover_art`)?.id || "";

  const coverQuery = useQuery<CoverData, Error>(
    [`cover`, coverID],
    () => CoverByIDPromise(coverID),
    { enabled: !!coverID },
  );
  const coverData = coverQuery.data;
  return (
    <div>
      <h1>{mangaData?.attributes?.title.en}</h1>
      <img
        src={`https://uploads.mangadex.org/covers/${mangaData?.id}/${coverData?.attributes?.fileName}`}
      />
      <strong>👀 Big dongus chongus</strong>{" "}
      <strong>✨ bigger dongus chongus</strong>{" "}
      <strong>🍴 the biggest big dongus chongus</strong>
    </div>
  );
}
