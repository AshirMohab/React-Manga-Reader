import "../css/App.css";
import React from "react";
import HeaderCard from "./Header";
import MangaComponent from "./MangaID";
import { Provider } from "react-redux";
import { rtkstore } from "../reduxStore/rtkStore";
import PopularRtk from "./PopularRtk";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { MangaCardReactQueryComponent } from "./MangaReactQuery";

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
        <HeaderCard
          tags={["Home", "Manga", "18+", "Genres", "Login", "Sign-up"]}
        ></HeaderCard>
      </header>
      <div className="h-[100%] m-6 px-4 md:grid md:grid-cols-3 gap-16 md:grid-rows-2  justify-center flex flex-row">
        {/* <div className="bg-slate-50 p-6">
          <MangaComponent />
        </div> */}
        {/* <div>
          <Provider store={rtkstore}>
            <PopularRtk />
          </Provider>
        </div> */}
        <div>
          <QueryClientProvider client={queryClient}>
            <MangaCardReactQueryComponent />
          </QueryClientProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
