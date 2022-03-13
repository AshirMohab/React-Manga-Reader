import {
  ReactChild,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { async } from "rxjs";
import { getCoverList, getMangaByID, getMangas } from "../ApiCalls/apiCalls";
import { CoverListObject } from "../models/coverList";
import { LOADINGSTATE } from "../models/loadingState";
import { MangaObject } from "../models/mangaModel";

export default function MangaComponent() {
  const [getManga, setManga] = useState<MangaObject | null>();
  const [coverList, setCoverList] = useState<CoverListObject | null>(null);

  const manga$ = getMangaByID(`789642f8-ca89-4e4e-8f7b-eee4d17ea08b`);
  useEffect(() => {
    manga$.subscribe((manga) => {
      console.log(manga);
      setManga(manga);
    });
  }, []);

  const coverList$ = getCoverList();
  useEffect(() => {
    coverList$.subscribe((covers) => {
      console.log(covers);
      setCoverList(covers);
    });
  }, []);

  return (
    // <div className="md:grid md:grid-cols-3 gap-16 md:grid-rows-2 m-4 justify-center">
    <div className="flex flex-col shadow rounded-2xl p-8 mb-4 bg-white">
      <h5 className="text-sm font-bold m-2">
        {getManga?.data?.attributes?.title?.en}
      </h5>
      <img
        src={`https://uploads.mangadex.org/covers/${coverList?.data[8]?.relationships[0]?.id}/${coverList?.data[8]?.attributes.fileName}`}
      />
      {console.log(coverList?.data[0]?.relationships[0]?.id)}
      {console.log(coverList?.data[1]?.attributes.fileName)}
    </div>
    // </div>
  );
}
