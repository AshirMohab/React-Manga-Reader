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

export default function MangaCompnent() {
  const [getManga, setManga] = useState<MangaObject | null>();

  const manga$ = getMangaByID(`789642f8-ca89-4e4e-8f7b-eee4d17ea08b`);
  useEffect(() => {
    manga$.subscribe((manga) => {
      console.log(manga);
      setManga(manga);
    });
  }, []);

  return (
    <div>
      <div className="bg-red-400">{getManga?.data?.attributes?.title?.en}</div>
    </div>
  );
}
