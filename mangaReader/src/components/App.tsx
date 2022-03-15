import "../css/App.css";
import React from "react";
import HeaderCard from "./Header";
import MangaComponent from "./MangaHomePage";
import { Provider } from "react-redux";
import { rtkstore } from "../reduxStore/rtkStore";
import PopularRtk from "./PopularRtk";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { MangaCardReactQueryComponent } from "./MangaReactQuery";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="grid grid-rows-1 w-[100%] h-[100%] bg-slate-100 ">
      <header className="my-6 flex flex-wrap items-center justify-center xl:justify-end">
        <div className="font-bold text-3xl ml-4 justify-center xl:flex-auto xl:justify-start min-w-[100px]">
          <div className="w-2 h-2 rounded-full bg-slate-50"></div>
          <div id="Logo" className="font-serif -m-1.5">
            MANGADEX
          </div>
        </div>
        {/* <HeaderCard
          tags={["Home", "Manga", "Favourites", "Genres", "Login", "Sign-up"]}
        ></HeaderCard> */}
        <div className="flex md:flex-row font-semibold text-sm items-center px-6 gap-5 sm:gap-24 sm:flex-col ">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link to="/" className="hover:text-blue-400">
            Genres
          </Link>
          <Link to="manga-details" className="hover:text-blue-400">
            Favourite
          </Link>
          <Link to="/" className="hover:text-blue-400">
            Login
          </Link>
          <Link to="/" className="hover:text-blue-400">
            Sign-up
          </Link>
        </div>
      </header>
      <div>
        <div className="bg-slate-100">
          <QueryClientProvider client={queryClient}>
            <Provider store={rtkstore}>
              <Routes>
                <Route path="/" element={<MangaComponent />} />
                <Route
                  path="manga-details"
                  element={
                    <MangaCardReactQueryComponent id="789642f8-ca89-4e4e-8f7b-eee4d17ea08b" />
                  }
                />
                <Route path="favourites" element={<PopularRtk />} />
              </Routes>
            </Provider>
          </QueryClientProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
