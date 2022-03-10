import React from "react";
import { from, Observable } from "rxjs";
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
