import { Header, ListMovieInHomePage, NewUpdateMovies, Slider } from "../components";
import Footer from "../components/Footer";
import TopSeriesMovies from "../components/TopSeriesMovies";
import TopSingleMovies from "../components/TopSingleMovies";

function HomePage() {
    return ( 
        <div className="bg-[#1A191F]">
            
            
            <div className="slider">
                <Slider/>
            </div>
            <NewUpdateMovies/>
            <div className="flex px-28 min-h-96 gap-x-8 pb-16">
                {/* list phim */}
                <div className="w-[75%]">
                    <ListMovieInHomePage/>
                </div>

                {/* sidebar right */}
                <div className="w-[300px] flex flex-col gap-8">
                    <TopSingleMovies/>
                    <TopSeriesMovies/>
                </div>
            </div>
           
        </div>
     );
}

export default HomePage;