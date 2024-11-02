import { IoMdPlay } from "react-icons/io";
import { GetSingleMovie } from "../service/apiService";
import { useEffect, useState } from "react";

function TopSingleMovies() {

    const [topSingleMovie, setTopSingleMovie] = useState([])

    useEffect(() => {
        fetchTopSingleMovie()
    }, [])

    const fetchTopSingleMovie = async () => {
        let res = await GetSingleMovie(1, 5)
        if (res.status === 'success') {
            setTopSingleMovie(res.data.items)
        }

    }

    return (
        <div className="text-white rounded-xl overflow-hidden shadow-custom">
            <div className="h-[62px] flex items-center justify-center bg-[#19181D] text-xl">
                <span>Top phim lẻ</span>
            </div>
            <div className="p-6 bg-[#1E1D22] flex flex-col gap-5">

                {topSingleMovie && topSingleMovie.length > 0
                    && topSingleMovie.map((item,index) => {
                        return (
                            <div key={item._id} className="flex gap-3 w-max-[268px]">
                                <div className="w-[56px] h-[86px] rounded-md overflow-hidden border-2 border-blue-500 relative cursor-pointer">
                                    <img
                                        src={`https://phimimg.com/${item.poster_url}`}
                                        className="object-cover object-center size-full"
                                    />
                                    <div className="absolute size-full flex items-center justify-center group top-0 z-50">
                                        <div className="animate-scale-up-center hidden group-hover:block">
                                            <span className="border-2 border-white size-8 flex items-center justify-center rounded-full  ">
                                                <IoMdPlay size={'1rem'} color="red" />
                                            </span>
                                        </div>
                                    </div>
                                    <span className="absolute bg-blue-600 rounded-br text-[10px] font-semibold size-5 flex items-center justify-center top-0 left-0">{index+1}</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="font-bold hover:text-blue-600 cursor-pointer duration-200">{item.name}</div>
                                    <div className="flex gap-2">
                                        <span className="bg-blue-600 px-2 rounded-2xl text-[12px] flex items-center font-semibold line-clamp-1">{item.lang}</span>
                                        <span className="bg-blue-600 px-3 rounded-2xl text-[10px] flex items-center font-semibold">{item.quality}</span>
                                        <span className="text-gray-400 font-semibold text-[12px]">{item.year}</span>
                                    </div>
                                    <div className="flex gap-2 font-semibold text-gray-400 text-[13px]">
                                        <span>{item.time}</span>
                                        <span>{item.episode_current}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
}

export default TopSingleMovies;