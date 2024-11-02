import { CartoonInHomePage, ListTypeMovieInHomePage } from "./ComponentMovieInHomaePage";

function ListMovieInHomePage() {
    return (
        <div className="">
            <div className="flex flex-col gap-10">
                <ListTypeMovieInHomePage movie='singleMovie' />
                <ListTypeMovieInHomePage movie='seriesMovie' />
            </div>
            <div className="mt-10">
                <CartoonInHomePage />
            </div>
        </div>
    );
}

export default ListMovieInHomePage;