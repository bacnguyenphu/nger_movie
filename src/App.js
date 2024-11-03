import { Route, Routes } from "react-router-dom";
import { HomePage, PageMovie, DetailPage } from "./layouts";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ListMovieFilter } from "./components";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DetailPage />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/danh-sach" element={<PageMovie />}>
            <Route path="filter/:filter" element={<ListMovieFilter />}></Route>
            <Route path=":genre" element={<ListMovieFilter />}></Route>
          </Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
