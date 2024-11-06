import { Outlet } from "react-router-dom";
import { TopSeriesMovies, TopSingleMovies } from "../components";


function PageMovie() {
    return (
        <div className="flex px-2 lg:px-4 xl:px-28 min-h-96 gap-x-8 pb-16 pt-32">
            {/* list phim */}
            <div className="w-full lg:w-[75%]">
                <Outlet />
            </div>

            {/* sidebar right */}
            <div className="w-[300px] lg:flex flex-col gap-8 hidden">
                <TopSingleMovies />
                <TopSeriesMovies />
            </div>
        </div>
    );
}

export default PageMovie
