import { Outlet } from "react-router-dom";
import { TopSeriesMovies, TopSingleMovies } from "../components";


function PageMovie() {
    return (
        <div className="flex px-28 min-h-96 gap-x-8 pb-16 pt-32">
            {/* list phim */}
            <div className="w-[75%]">
                <Outlet />
            </div>

            {/* sidebar right */}
            <div className="w-[300px] flex flex-col gap-8">
                <TopSingleMovies />
                <TopSeriesMovies />
            </div>
        </div>
    );
}

export default PageMovie
