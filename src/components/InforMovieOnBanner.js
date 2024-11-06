import { FaEye } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";
import { watchMovieContext } from "../App";
import { useContext } from "react";

function InforMovieOnBanner({ movie, watchNow }) {

    const navigateWatchMovie = useContext(watchMovieContext)

    return (
        <div className=" relative z-50 w-full lg:w-[70%]">
            <div className="text-2xl font-semibold text-white">
                {movie.name}
            </div>

            <div className="flex items-center gap-5 my-5">
                <div className="border rounded-3xl py-1 px-3">
                    {movie?.type === 'series' ? "Phim bộ" : "Phim lẻ"}
                </div>
                <div>{movie?.time}</div>
                <div>{movie?.year}</div>
                <div className="flex items-center gap-1">
                    <span><FaEye /></span>
                    <span>{movie?.view}</span>
                </div>
            </div>

            <div className="line-clamp-3">
                {movie?.content}
            </div>

            <div className="my-4">
                <div>
                    Đạo diễn: {movie?.director.join(', ')}
                </div>
                <div>Diễn viên: {movie?.actor.join(', ')}</div>
                <div>Thể loại: {movie?.category.map((item, index) => {
                    return (
                        <span key={item._id || index}>{item.name}{(index === movie?.category.length - 1) ? ' .' : ' ,'}</span>
                    )
                })}</div>
            </div>
            {watchNow ?
                <div
                    className="cursor-pointer rounded-lg bg-blue-400 hover:bg-blue-500 px-3 py-2 font-semibold flex w-32 items-center justify-center gap-2"
                    onClick={() => { watchNow()}}
                >
                    <span><CiPlay1 /></span>
                    <button
                        className=""
                    >
                        Xem ngay
                    </button>
                </div>
                :
                <div
                    className="cursor-pointer rounded-lg bg-blue-400 hover:bg-blue-500 px-3 py-2 font-semibold flex w-32 items-center justify-center gap-2"
                    onClick={() => { navigateWatchMovie(movie.slug) }}
                >
                    <span><CiPlay1 /></span>
                    <button
                        className=""
                    >
                        Xem phim
                    </button>
                </div>
            }

        </div>
    );
}

export default InforMovieOnBanner;