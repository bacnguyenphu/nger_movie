import { BiSolidMoviePlay } from "react-icons/bi";
import { IoMdPlay } from "react-icons/io";
import { GetSingleMovie, GetSeriesMovie } from "../../service/apiService";
import { useEffect, useState } from "react";

function ListTypeMovieInHomePage({ movie }) {

    const [listMovie, setListMovie] = useState([])
    const[typeMovie,setTypeMovie] = useState('')

    useEffect(() => {
        fetchMovies()
    }, [])

    const fetchMovies = async () => {
        if (movie === 'singleMovie') {
            const res = await GetSingleMovie(3, 18)
            if (res.status === 'success') {
                setListMovie(res.data.items)
            }
            setTypeMovie('Phim lẻ')
        }

        if (movie === 'seriesMovie') {
            const res = await GetSeriesMovie(3, 18)
            if (res.status === 'success') {
                setListMovie(res.data.items)
            }
            setTypeMovie('Phim bộ')
        }

    }


    return (
        <div className="text-white">
            <div className="flex items-center gap-3 py-5">
                <span><BiSolidMoviePlay size={'1.5rem'} color="#2563EB" /></span>
                <span className="font-semibold text-[18px]">{typeMovie}</span>
                <button className="bg-blue-500 px-3 text-[12px] rounded-lg">Xem thêm</button>
            </div>

            <div className="grid grid-cols-6 grid-rows-3 gap-[10px]">



                {listMovie && listMovie.length > 0 &&
                    listMovie.map(item => {
                        return (
                            <div
                                key={`${item._id}`}
                                className={`h-[223px] cursor-pointer flex items-end rounded-lg overflow-hidden bg-center bg-cover bg-no-repeat duration-200 hover:shadow-custom hover:scale-125 hover:z-50 relative`}
                                style={{ backgroundImage: `url(https://phimimg.com/${item.poster_url})` }}
                            >
                                <div className="absolute size-full bg-black-fade-bottom2 flex items-center justify-center group">
                                    <div className="animate-scale-up-center hidden group-hover:block">
                                        <span className="border-2 border-white size-10 flex items-center justify-center rounded-full  ">
                                            <IoMdPlay size={'1.5rem'} color="red" />
                                        </span>
                                    </div>

                                </div>
                                <span className="absolute bg-blue-600 rounded-3xl text-[12px] px-2 flex items-center top-1 left-1">{item.year}</span>
                                <div className="flex items-center relative">
                                    <div className="px-1 text-[15px] font-semibold">{item.name}</div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );


}

export default ListTypeMovieInHomePage;