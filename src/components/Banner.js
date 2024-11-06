
import InforMovieOnBanner from "./InforMovieOnBanner";

function Banner({ movie,hiddenInfor,watchNow }) {

    return (
        <div
            className={`relative px-2 lg:px-4 xl:px-28 pt-[150px] h-[590px]  w-screen bg-center bg-cover cursor-grab active:cursor-grabbing text-white`}
            style={{ backgroundImage: `url(${movie.thumb_url})` }}
        >
            {hiddenInfor?<></>: <InforMovieOnBanner movie={movie} watchNow={watchNow}/>}
            <div className="absolute inset-0 bg-black-fade-bottom"></div>
        </div>
    );
}

export default Banner;