import { Route, Routes } from "react-router-dom";
import { HomePage, PageMovie } from "./layouts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<HomePage/>}></Route>
        <Route path="/danh-sach" element={<PageMovie/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
