import { useQuery } from "react-query";
import {
  getMangaChapters,
  getMangasPromiseID,
  getMangaVolumes,
} from "../ApiCalls/apiCalls";
import { ChapterData } from "../models/chapterModel";
import { MangaData } from "../models/mangaModel";
import { MangaVolumeData, MangaVolumes } from "../models/volumeModel";
import { MangaCardProp } from "../props/componentTypes";

export default function ChaptersComponent(props: MangaCardProp) {
  const { id } = props;
  const mangaQuery = useQuery<MangaData, Error>(`manga`, () =>
    getMangasPromiseID(id),
  );

  const mangaData = mangaQuery?.data;

  const mangaVolumeQuery = useQuery<MangaVolumes, Error>(
    [`manga volumes`, id],
    () => getMangaVolumes(id),
  );

  console.log(mangaVolumeQuery);
  const volumeData = mangaVolumeQuery?.data;
  console.log(volumeData);
  if (volumeData) {
    console.log("I have data");
  } else {
    console.log(volumeData);
    console.log("NO data");
  }

  // const chapterQuery = useQuery<ChapterData, Error>(`chapters`, () =>
  //   getMangaChapters(""),
  // );

  // const chapters = chapterQuery.data;

  return (
    <div>
      <div className="bg-blue-200">
        The blue sky
        <div className="bg-red-300">{mangaData?.attributes?.title?.en}</div>
        <div className="bg-green-400">The red sea</div>
      </div>
      <div className="bg-blue-200">
        The blue sky
        <div className="bg-red-300">The green grass</div>
        <div className="bg-red-300">{mangaData?.attributes?.title?.en}</div>
      </div>
      <div className="bg-blue-200">
        The blue sky
        <div className="bg-red-300">The green grass</div>
        <div className="bg-green-400">The red sea</div>
        <div className="bg-red-300">{mangaData?.attributes?.title?.en}</div>
        <div className="bg-red-300">{mangaData?.attributes?.title?.en}</div>
        <div className="bg-red-300">{mangaData?.attributes?.title?.en}</div>
        <div className="bg-red-300">{mangaData?.attributes?.title?.en}</div>
      </div>
      <div className="bg-blue-200">
        The blue sky
        <div className="bg-red-300">The green grass</div>
        <div className="bg-green-400">The red sea</div>
        <div className="bg-red-300">{mangaData?.attributes?.title?.en}</div>
        <div className="bg-red-300">{mangaData?.attributes?.title?.en}</div>
        <div className="bg-red-300">{mangaData?.attributes?.title?.en}</div>
        <div className="bg-red-300">{mangaData?.attributes?.title?.en}</div>
        <div className="bg-red-300">{mangaData?.attributes?.title?.en}</div>
      </div>
    </div>
  );
}
