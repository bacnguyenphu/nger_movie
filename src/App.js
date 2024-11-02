import { Route, Routes } from "react-router-dom";
import { HomePage, PageMovie,DetailPage } from "./layouts";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<DetailPage />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/danh-sach" element={<PageMovie />}></Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
