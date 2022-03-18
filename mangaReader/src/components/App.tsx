import MangaComponent from "./MangaHomePage";
import PopularRtk from "./FavouriteManga";
import { MangaCardReactQueryComponent } from "./SpecificMangaPage";
import { Link, Route, Routes } from "react-router-dom";
import ChaptersComponent from "./Chapters";
import SignUp from "./Signup";

function App() {
  return (
    <div className="grid grid-rows-1 w-full h-full bg-slate-200 ">
      <header className="my-6 flex flex-wrap items-center justify-center xl:justify-end bg-slate-50 rounded-lg mx-3">
        <div className="font-bold text-3xl ml-4 justify-center xl:flex-auto xl:justify-start min-w-[100px]">
          <div className="w-2 h-2 rounded-full bg-slate-50"></div>
          <div id="Logo" className="font-serif -m-1.5 p-6 ">
            MANGADEX
          </div>
        </div>
        <div className="flex md:flex-row font-semibold text-sm items-center px-6 gap-5 sm:gap-24 sm:flex-col ">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link to="favourites" className="hover:text-blue-400">
            Favourite
          </Link>
          <Link to="/sign-up" className="hover:text-blue-400">
            Sign-up
          </Link>
        </div>
      </header>
      <div>
        <div className="bg-slate-100">
          <Routes>
            <Route path="/" element={<MangaComponent />} />
            <Route
              path="manga-details/:mangaID"
              element={<MangaCardReactQueryComponent />}
            />
            <Route
              path="favourites/manga-details/:mangaID"
              element={<MangaCardReactQueryComponent />}
            />
            {/* localhost3000/manga/id */}
            <Route path="favourites" element={<PopularRtk />} />
            <Route path="sign-up" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
