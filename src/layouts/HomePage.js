import { Header, NewUpdateMovies, Slider } from "../components";
import TopSeriesMovies from "../components/TopSeriesMovies";
import TopSingleMovies from "../components/TopSingleMovies";

function HomePage() {
    return ( 
        <div className="bg-[#1A191F]">
            <div className="header"><Header/></div>
            
            <div className="slider">
                <Slider/>
            </div>
            <NewUpdateMovies/>
            <div className="flex px-28 min-h-96 gap-x-8">
                {/* list phim */}
                <div className="w-[72%] border border-red-400"></div>

                {/* sidebar right */}
                <div className="w-[28%] border border-green-400">
                    <TopSingleMovies/>
                    <TopSeriesMovies/>
                </div>
            </div>
        </div>
     );
}

export default HomePage;