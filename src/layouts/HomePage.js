import { ListMovieInHomePage, NewUpdateMovies, TopSeriesMovies, TopSingleMovies, Slider } from "../components";

function HomePage() {
    return (
        <div className="">


            <div className="slider">
                <Slider />
            </div>
            <div className="px-28">
                <NewUpdateMovies />
            </div>
            <div className="flex px-28 min-h-96 gap-x-8 pb-16">
                {/* list phim */}
                <div className="w-[75%]">
                    <ListMovieInHomePage />
                </div>

                {/* sidebar right */}
                <div className="w-[300px] flex flex-col gap-8">
                    <TopSingleMovies />
                    <TopSeriesMovies />
                </div>
            </div>

        </div>
    );
}

export default HomePage;