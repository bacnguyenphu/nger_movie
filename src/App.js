import { Route, Routes, useNavigate } from "react-router-dom";
import { HomePage, PageMovie, DetailPage, WatchMovie } from "./layouts";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ListMovieFilter } from "./components";
import { createContext } from "react";

export const watchMovieContext = createContext()

function App() {

  const navigate = useNavigate()

  const navigateWatchMovie = (slug) => {
    navigate(`xem-phim/${slug}`)
  }

  return (
    <watchMovieContext.Provider value={navigateWatchMovie}>
      <div className="App">
        <Routes>
          <Route path="/" element={<DetailPage />}>
            <Route index element={<HomePage />}></Route>
            <Route path="danh-sach" element={<PageMovie />}>
              <Route path="filter/:filter" element={<ListMovieFilter />}></Route>
              <Route path=":genre" element={<ListMovieFilter />}></Route>
              <Route path="search/:search" element={<ListMovieFilter />}></Route>
            </Route>
            <Route path="xem-phim/:nameMovie" element={<WatchMovie />}>
                <Route path=":episode"  element={<WatchMovie />}/>
            </Route>
          </Route>

        </Routes>
      </div>
    </watchMovieContext.Provider>

  );
}

export default App;
