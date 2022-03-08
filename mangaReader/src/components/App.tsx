import "../css/App.css";
import React from "react";
import HeaderCard from "./Header";
import SearchBarComponent from "./SearchBar";

function App() {
  return (
    <div
      id="HomePage"
      className="grid grid-rows-2 w-[100%] h-[100%] bg-slate-100 "
    >
      <div
        id="Header"
        className="my-6 flex flex-wrap items-center justify-center xl:justify-end"
      >
        <div className="font-bold text-3xl ml-4 justify-center xl:flex-auto xl:justify-start min-w-[100px]">
          <div className="w-2 h-2 rounded-full bg-slate-50"></div>
          <div id="Logo" className="font-serif -m-1.5">
            MANGADEX
          </div>
        </div>
        <HeaderCard
          tags={["Home", "Manga", "18+", "Genres", "Login", "Sign-up"]}
        ></HeaderCard>
      </div>
      <SearchBarComponent />
    </div>
  );
}

export default App;
