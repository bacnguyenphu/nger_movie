import { ListMovieInHomePage, NewUpdateMovies, TopSeriesMovies, TopSingleMovies, Slider } from "../components";

function HomePage() {
    return (
        <div className="">


            <div className="slider">
                <Slider />
            </div>
            <div className=" px-2 lg:px-4 xl:px-28">
                <NewUpdateMovies />
            </div>
            <div className="flex px-2 lg:px-4 xl:px-28 min-h-96 gap-x-8 pb-16">
                {/* list phim */}
                <div className="w-full lg:w-[75%]">
                    <ListMovieInHomePage />
                </div>

                {/* sidebar right */}
                <div className="lg:w-[300px] hidden lg:flex flex-col gap-8">
                    <TopSingleMovies />
                    <TopSeriesMovies />
                </div>
            </div>

        </div>
    );
}

export default HomePage;