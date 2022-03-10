import {
  ReactChild,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { async } from "rxjs";
import { getMangaByID, getMangas } from "../ApiCalls/apiCalls";
import { LOADINGSTATE } from "../models/loadingState";
import { MangaObject } from "../models/mangaModel";

export default function MangaComponent() {
  const [getManga, setManga] = useState<MangaObject | null>();

  const manga$ = getMangaByID(`789642f8-ca89-4e4e-8f7b-eee4d17ea08b`);
  useEffect(() => {
    manga$.subscribe((manga) => {
      console.log(manga);
      setManga(manga);
    });
  }, []);

  return (
    <div className="md:grid md:grid-cols-3 gap-16 md:grid-rows-2 m-4 justify-center">
      <div className="flex flex-col shadow rounded-2xl p-8 mb-4 bg-white">
        <h5 className="text-sm font-bold m-2">
          {getManga?.data?.attributes?.title?.en}
        </h5>
        <p className="m-3">{getManga?.data?.attributes?.description?.en}</p>
      </div>
    </div>
  );
}
