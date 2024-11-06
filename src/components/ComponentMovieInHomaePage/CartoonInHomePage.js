import { BiSolidMoviePlay } from "react-icons/bi";
import { IoMdPlay } from "react-icons/io";
import { GetCartoon } from "../../service/apiService";
import { useEffect, useState, useContext } from "react";
import { watchMovieContext } from "../../App";
import { useNavigate } from "react-router-dom";

function CartoonInHomePage() {

    const navigate = useNavigate()
    const [listCartoon, setListCartoon] = useState([])
    const navigateWatchMovie = useContext(watchMovieContext)
    const [slugMovie, setSlugMovie] = useState('')

    useEffect(() => {
        fetchCartoon()
    }, [])

    const fetchCartoon = async () => {
        const res = await GetCartoon(3, 15)
        if (res.status === 'success') {
            setListCartoon(res.data.items)
            setSlugMovie('/danh-sach/filter/hoat-hinh')
        }
    }

    return (
        <div className="text-white">
            <div className="flex items-center gap-3 py-5">
                <span><BiSolidMoviePlay size={'1.5rem'} color="#2563EB" /></span>
                <span className="font-semibold text-[18px]">Phim hoạt hình</span>
                <button
                    className="bg-blue-500 px-3 text-[12px] rounded-lg"
                    onClick={()=>{navigate(slugMovie)}}
                    >
                    Xem thêm
                </button>
            </div>
            <div className="grid xl:grid-cols-5 xl:grid-rows-3 lg:grid-cols-3 grid-cols-2 gap-[10px]">

                {listCartoon && listCartoon.length > 0 &&
                    listCartoon.map(item => {
                        return (
                            <div
                                className="h-[101px] bg-center bg-cover rounded-lg relative flex flex-col justify-between overflow-hidden cursor-pointer group"
                                style={{ backgroundImage: `url(https://phimimg.com/${item.poster_url})` }}
                                onClick={() => { navigateWatchMovie(item.slug) }}
                            >
                                <div className="bg-blue-600 rounded-xl text-[10px] w-fit px-2 mt-1 ml-1 relative z-50 group-hover:translate-y-[-30px] duration-200">
                                    <span className="mr-1">{item.episode_current}</span>
                                    <span>{item.lang}</span>
                                </div>
                                <div className="absolute size-full bg-black-fade-bottom2 flex justify-center items-center group">
                                    <div className="animate-scale-up-center hidden group-hover:block z-50">
                                        <span className="border-2 border-white size-10 flex items-center justify-center rounded-full  ">
                                            <IoMdPlay size={'1.5rem'} color="red" />
                                        </span>
                                    </div>
                                </div>
                                <div className="absolute size-full bg-black/40 duration-200 hidden group-hover:block"></div>
                                <div className="text-[12px] px-1 relative z-50 group-hover:translate-y-[42px] duration-200">
                                    <span className="font-semibold">{item.name}</span>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
}

export default CartoonInHomePage;