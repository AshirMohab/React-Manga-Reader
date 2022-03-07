import React, { useState } from "react";

export default function Manga() {
  const [getManga, setManga] = useState(null);
  const mangaFetch = async () => {
    await fetch(`https://api.scryfall.com/cards/random`).then((res) =>
      res.json().then((res) => setManga(res)),
    );
  };
  mangaFetch();

  return (
    <div className="flex flex-col bg-blue-500">
      {getManga?.name}
      <div>The great blue sky </div>
    </div>
  );
}
