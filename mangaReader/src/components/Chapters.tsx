import { useQuery } from "react-query";
import {
  getMangaChapters,
  getMangasPromiseID,
  getMangaVolumes,
} from "../ApiCalls/apiCalls";
import { ChapterData } from "../models/chapterModel";
import { MangaData } from "../models/mangaModel";
import { MangaVolumeData, MangaVolumes, Volume } from "../models/volumeModel";
import {
  ChapterCardProp,
  MangaCardProp,
} from "../componentTypes/componentTypes";

const Chapter = (props: ChapterCardProp) => {
  const { id } = props;
  const chapterQuery = useQuery<ChapterData, Error>([`chapters`, id], () =>
    getMangaChapters(id),
  );
  const chapters = chapterQuery.data;
  return <div>{JSON.stringify(chapters)}</div>;
};

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

  const volumeData = mangaVolumeQuery?.data as MangaVolumes;

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
