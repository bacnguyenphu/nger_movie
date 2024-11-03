import { IoMdPlay } from "react-icons/io";
import { GetSeriesMovie } from "../service/apiService";
import { useEffect, useState } from "react";
import Tippy from '@tippyjs/react/headless';

function TopSeriesMovies() {

    const [topSeriesMovie, setTopSeriesMovie] = useState([])

    useEffect(() => {
        fetchTopSeriesMovie()
    }, [])

    const fetchTopSeriesMovie = async () => {
        let res = await GetSeriesMovie(1, 6)
        if (res.status === 'success') {
            setTopSeriesMovie(res.data.items)
        }

    }

    return (
        <div className="text-white rounded-xl overflow-hidden shadow-custom">
            <div className="h-[62px] flex items-center justify-center bg-[#19181D] text-xl">
                <span>Top phim bộ</span>
            </div>
            <div className="p-6 bg-[#1E1D22] grid grid-cols-3 grid-rows-2 gap-x-[10px] gap-y-2">
                {topSeriesMovie && topSeriesMovie.length > 0 &&
                    topSeriesMovie.map(item => {
                        return (
                            <div
                                key={item._id}
                                className={`h-[120px] cursor-pointer flex items-end rounded-lg overflow-hidden bg-center bg-cover bg-no-repeat relative`}
                                style={{ backgroundImage: `url(https://phimimg.com/${item.poster_url})` }}
                            >
                                <div className="absolute size-full bg-black-fade-bottom2 flex items-center justify-center group">
                                    <div className="animate-scale-up-center hidden group-hover:block">
                                        <span className="border-2 border-white size-10 flex items-center justify-center rounded-full  ">
                                            <IoMdPlay size={'1.5rem'} color="red" />
                                        </span>
                                    </div>

                                </div>
                                <span className="absolute bg-blue-600 rounded-3xl text-[12px] px-2 flex items-center top-1 left-1">{item.quality}</span>
                                <div className="flex items-center relative">
                                    <Tippy
                                        render={attrs => (
                                            <div className="box text-white text-[14px] bg-slate-700 px-3" tabIndex="-1" {...attrs}>
                                                {item.name}
                                            </div>
                                        )}
                                        placement="bottom-start"
                                    >
                                        <div className="px-1 text-[12px] font-semibold line-clamp-2">{item.name}</div>
                                    </Tippy>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
}

export default TopSeriesMovies;