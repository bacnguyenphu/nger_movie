import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Banner, ModalWatchMovie, NewUpdateMovies, TopSeriesMovies, TopSingleMovies } from "../components";
import { useEffect, useState } from "react";
import { GetInforMovie, GetMovieGenre } from "../service/apiService";
import { CgPlayListCheck } from "react-icons/cg";
import _ from 'lodash'
import InforMovieOnBanner from "../components/InforMovieOnBanner";

function WatchMovie() {

    const params = useParams()
    console.log(params);

    const [inforMovie, setInforMovie] = useState({})
    const [showModalWatch, setShowModalWatch] = useState(false)
    const [linkMovieCurrent, setLinkMovieCurrent] = useState('')
    // const [linksMovie, setLinksMovie] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchMovie()
        // test()
    }, [params, linkMovieCurrent])

    const fetchMovie = async () => {
        const res = await GetInforMovie(params.nameMovie)
        // console.log(res);
        if (res.status === true) {
            setInforMovie(res)
        
            //lấy link phim theo tập
            if (params.episode) {
                const a = res.episodes[0].server_data.find(item => item.slug === params.episode)
                // setLinksMovie([a.link_embed, a.link_m3u8])
                setLinkMovieCurrent(a.link_embed)
            }
        }
        if (linkMovieCurrent && params.episode) {
            setShowModalWatch(true)
        }
        else {
            setShowModalWatch(false)
        }
    }

    const watchNow = () => {
        navigate(`/xem-phim/${inforMovie.movie.slug}/${inforMovie.episodes[0].server_data[0].slug}`)
    }

    return (
        <div className="text-white">

            <div className="relative">
                <div>
                    {(_.isEmpty(inforMovie) === true) ? <></> : <Banner movie={inforMovie.movie} hiddenInfor={showModalWatch} watchNow={watchNow} />}
                </div>
                <div className="">
                    {showModalWatch && <ModalWatchMovie linkMovie={linkMovieCurrent} />}
                    
                </div>
            </div>

            <div className={`px-2 lg:px-4 xl:px-28 ${showModalWatch ? 'pt-64' : 'pt-16'}`}>
                <div className="font-semibold text-xl mb-1 flex items-center ">
                    <span><CgPlayListCheck size={'1.5rem'} color="#3b82f6" /></span>
                    <span>Danh sách tập phim</span>
                </div>
                <div className="flex flex-wrap gap-2 text-[12px]">
                    {_.isEmpty(inforMovie) === false &&
                        inforMovie?.episodes[0]?.server_data.map(item => {
                            return (
                                <NavLink key={item.slug}
                                    to={`${item.slug}`}
                                    className={({ isActive }) => {
                                        return isActive ? 'w-16 h-7 rounded-md bg-blue-500 hover:bg-blue-500 flex items-center justify-center cursor-pointer' : 'w-16 h-7 rounded-md bg-slate-600 hover:bg-blue-500 flex items-center justify-center cursor-pointer'
                                    }}
                                >
                                    {item.name}
                                </NavLink>
                            )
                        })
                    }
                </div>

            </div>

            <div className={`flex px-2 lg:px-4 xl:px-28 min-h-96 gap-x-8 pb-16 mt-6`}>
                <div className="w-full lg:w-[75%]">
                    {(!_.isEmpty(inforMovie) && showModalWatch) && <InforMovieOnBanner movie={inforMovie.movie} />}

                    <div className="mt-5">
                        <NewUpdateMovies/>
                    </div>
                </div>

                {/* sidebar right */}
                <div className="w-[300px] lg:flex flex-col gap-8 hidden">
                    <TopSingleMovies />
                    <TopSeriesMovies />
                </div>
            </div>
        </div>
    );
}

export default WatchMovie;