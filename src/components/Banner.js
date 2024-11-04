

import InforMovieOnBanner from "./InforMovieOnBanner";

function Banner({ movie,hiddenInfor }) {

    return (
        <div
            className={`relative h-[590px] w-full bg-center bg-cover cursor-grab active:cursor-grabbing text-white`}
            style={{ backgroundImage: `url(${movie.thumb_url})` }}
        >
            {hiddenInfor?<></>: <InforMovieOnBanner movie={movie}/>}
            <div className="absolute inset-0 bg-black-fade-bottom"></div>
        </div>
    );
}

export default Banner;