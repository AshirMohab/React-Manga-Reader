import { useState } from "react";
import { LOADINGSTATE } from "../models/loadingState";

export default function SearchBarComponent() {
  const [getManga, setManga] = useState(null);
  const [isLoading, setIsLoading] = useState(LOADINGSTATE.IDLE);
  const [getInputState, setInputState] = useState("");

  const handleOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === `Enter`) {
      mangaFetch(getInputState);
    }
  };
  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
    console.log(`using scryfall api.`);
  };

  const mangaFetch = async (e: string) => {
    return await fetch(`https://api.scryfall.com/cards/autocomplete?q=${e}`)
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
      <label className="p-2">Press enter</label>
      <input
        id="enter-input"
        type="text"
        defaultValue="Search for manga you want to read"
        value={getInputState}
        onChange={(e) => handleOnInputChange(e)}
        // onKeyPress={(e) => e.key === "Enter" && handleOnEnterChange(e)}
        onKeyDown={(e) => {
          handleOnEnter(e);
        }}
      />
    </div>
  );
}
