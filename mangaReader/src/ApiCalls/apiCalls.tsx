import React from "react";
import { from, Observable } from "rxjs";
import { CoverListObject } from "../models/coverList";
import { MangaObject } from "../models/mangaModel";

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
