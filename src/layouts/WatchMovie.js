import { NavLink, useParams } from "react-router-dom";
import { Banner, ModalWatchMovie, TopSeriesMovies, TopSingleMovies } from "../components";
import { useEffect, useState } from "react";
import { GetInforMovie } from "../service/apiService";
import { CgPlayListCheck } from "react-icons/cg";
import _ from 'lodash'

function WatchMovie() {

    const params = useParams()
    console.log(params);

    const [inforMovie, setInforMovie] = useState({})
    const [showModalWatch, setShowModalWatch] = useState(true)

    useEffect(() => {
        fetchMovie()
    }, [])

    const fetchMovie = async () => {
        const res = await GetInforMovie(params.nameMovie)
        // console.log(res);
        if (res.status === true) {
            setInforMovie(res)
        }
    }

    console.log('check inforMovie', inforMovie);


    return (
        <div className="text-white">

            <div className="relative">
                <div>
                    {(_.isEmpty(inforMovie) === true) ? <></> : <Banner movie={inforMovie.movie} hiddenInfor={showModalWatch} />}
                </div>
                <div className="absolute w-[1268px] top-[80px] left-[50%] translate-x-[-50%] z-[80]">
                    {showModalWatch&& <ModalWatchMovie linkMovie={`https://player.phimapi.com/player/?url=https://s2.phim1280.tv/20231231/Qg9IHAdi/index.m3u8`}/>}
                </div>
            </div>

            <div className="flex px-28 min-h-96 gap-x-8 pb-16 pt-32">
                <div className="w-[75%]">
                    <div>
                        <div className="font-semibold text-xl mb-1 flex items-center ">
                            <span><CgPlayListCheck size={'1.5rem'} color="#3b82f6" /></span>
                            <span>Danh sách tập phim</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {_.isEmpty(inforMovie) === false &&
                                inforMovie?.episodes[0]?.server_data.map(item => {
                                    return (
                                        <NavLink key={item.slug}
                                            to={`${item.slug}`}
                                            className={({ isActive }) => {
                                                return isActive ? 'w-14 h-7 rounded-md bg-blue-500 hover:bg-blue-500 flex items-center justify-center cursor-pointer' : 'w-14 h-7 rounded-md bg-slate-600 hover:bg-blue-500 flex items-center justify-center cursor-pointer'
                                            }}
                                        >
                                            {item.name}
                                        </NavLink>
                                    )
                                })
                            }
                        </div>

                    </div>
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

export default WatchMovie;