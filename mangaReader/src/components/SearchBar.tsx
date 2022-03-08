import {
  ReactChild,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { LOADINGSTATE } from "../models/loadingState";
import { MangaObject } from "../models/mangaModel";

const MangaCompnent = () => {
  const [getManga, setManga] = useState<null | MangaObject>(null);
  const [isLoading, setIsLoading] = useState(LOADINGSTATE.IDLE);
  useEffect(() => {
    console.log(`using scryfall api.`);
    const fetchManga = async () => {
      return await fetch(
        `https://api.mangadex.org/manga/a77742b1-befd-49a4-bff5-1ad4e6b0ef7b`,
      ).then((res) => res.json().then((res) => setManga(res)));
    };
    fetchManga();
    console.log(fetchManga());
  }, []);

  return (
    <div className="bg-red-400">
      <p>{getManga?.data.attributes.description?.en}</p>
    </div>
  );
};

export default function SearchBarComponent() {
  const [getManga, setManga] = useState<null | MangaObject>(null);
  const [isLoading, setIsLoading] = useState(LOADINGSTATE.IDLE);
  const [getInputState, setInputState] = useState("");

  const handleOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === `Enter`) {
      mangaFetch(getInputState);
    }
  };
  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.defaultPrevented;
    setInputState(e.target.value);
    console.log(`using scryfall api.`);
  };

  const mangaFetch = async (e: string) => {
    return await fetch(
      `https://api.mangadex.org/manga/a77742b1-befd-49a4-bff5-1ad4e6b0ef7b`,
    )
      .then((res) => res.json())
      .then((res) => {
        setManga(res);
        setIsLoading(LOADINGSTATE.SUCCESS);
      })
      .catch((err) => setIsLoading(LOADINGSTATE.FAILURE));
  };

  return (
    <div id="on-enter">
      {" "}
      <div className=" p-4 flex flex-row">
        <label className="p-4">Search for manga </label>
        <input
          id="enter-input"
          type="text"
          value={getInputState}
          onChange={(e) => handleOnInputChange(e)}
          onKeyDown={(e) => {
            handleOnEnter(e);
          }}
        />
      </div>
      <div className="bg-red-400">
        {getManga?.data?.attributes?.description?.en}
      </div>
      {/* <MangaCompnent /> */}
    </div>
  );
}
