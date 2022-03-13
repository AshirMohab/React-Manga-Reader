import React from "react";
import { from, Observable, retry } from "rxjs";
import { CoverListObject } from "../models/coverList";
import { CoverData, CoverObject } from "../models/covers";
import { MangaData, MangaObject } from "../models/mangaModel";

// Bad way of using api calls. Observables bad.
export function getMangas(): Observable<MangaObject[]> {
  return from(
    fetch(`https://api.mangadex.org/manga`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res?.json() as Promise<MangaObject[]>;
      })
      .then((data: MangaObject[]) => data)
      .catch((err) => {
        throw new Error(err.toString());
      }),
  );
}

export function getMangaByID(id: string): Observable<MangaObject> {
  return from(
    fetch(`https://api.mangadex.org/manga/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res?.json() as Promise<MangaObject>;
      })
      .then((data: MangaObject) => data)
      .catch((err) => {
        throw new Error(err.toString());
      }),
  ); // end from
}

export function getCoverList(): Observable<CoverListObject> {
  return from(
    fetch(`https://api.mangadex.org/cover`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res?.json() as Promise<CoverListObject>;
      })
      .then((data: CoverListObject) => data)
      .catch((err) => {
        throw new Error(err.toString());
      }),
  ); // end from
}
export function getCoverListByID(id: string): Observable<CoverListObject> {
  return from(
    fetch(`https://api.mangadex.org/cover${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res?.json() as Promise<CoverListObject>;
      })
      .then((data: CoverListObject) => data)
      .catch((err) => {
        throw new Error(err.toString());
      }),
  ); // end from
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//Better way of using api calls using promises

export function CoverListPromise(): Promise<CoverListObject> {
  const response = fetch(`https://api.mangadex.org/cover`)
    .then((res) => res.json())
    .then((res) => res.data);
  return response;
}

export function CoverByIDPromise(id: string): Promise<CoverData> {
  const response = fetch(`https://api.mangadex.org/cover/${id}`)
    .then((res) => res.json())
    .then((res) => res.data);
  return response;
}

export function getMangasPromise(): Promise<MangaData> {
  const response = fetch(`https://api.mangadex.org/manga`)
    .then((res) => res.json())
    .then((res) => res.data);
  return response;
}

export function getMangasPromiseID(id: string): Promise<MangaData> {
  const response = fetch(`https://api.mangadex.org/manga/${id}`)
    .then((res) => res.json())
    .then((res) => res.data);
  return response;
}
