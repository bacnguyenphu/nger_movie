import { FaEye } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";
import { GetSingleMovie,GetInforMovie } from "../service/apiService";
import { useEffect, useState } from "react";

function TopSingleMovies() {

    const[topSingleMovie,setTopSingleMovie] = useState()
    
    useEffect(()=>{
        fetchTopSingleMovie()
    },[])

    const fetchTopSingleMovie = async()=>{
        let res = await GetSingleMovie(1,5)
        console.log('check res>>',res);
        
    }

    return (
        <div className="text-white rounded-xl overflow-hidden shadow-custom">
            <div className="h-[62px] flex items-center justify-center bg-[#19181D]">
                <span>Top phim lẻ</span>
            </div>
            <div className="p-5 bg-[#1E1D22] flex flex-col gap-5">

                <div className="flex gap-3 justify-center">
                    <div className="w-[56px] h-[86px] rounded-md overflow-hidden border-2 border-blue-500 relative cursor-pointer">
                        <img
                            src="https://phimimg.com/upload/vod/20230929-1/a6110983f8de490e116383020adc4662.jpg"
                            className="object-cover object-center size-full"
                        />
                        <div className="absolute size-full flex items-center justify-center group top-0 z-50">
                            <div className="animate-scale-up-center hidden group-hover:block">
                                <span className="border-2 border-white size-8 flex items-center justify-center rounded-full  ">
                                    <IoMdPlay size={'1rem'} color="red" />
                                </span>
                            </div>
                        </div>
                        <span className="absolute bg-blue-600 rounded-br text-[10px] font-semibold size-5 flex items-center justify-center top-0 left-0">1</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="font-bold hover:text-blue-600 cursor-pointer duration-200">Tháng ngày tươi đẹp</div>
                        <div className="flex gap-2">
                            <span className="bg-blue-600 px-2 rounded-2xl text-[12px] flex items-center font-semibold">Lồng tiếng</span>
                            <span className="bg-blue-600 px-3 rounded-2xl text-[10px] flex items-center font-semibold">HD</span>
                            <span className="text-gray-400 font-semibold text-[12px]">2023</span>
                        </div>
                        <div className="flex gap-2 font-semibold text-gray-400 text-[13px]">
                            <span>45 phút/tập</span>
                            <div className="flex items-center">
                                <span><FaEye /></span>
                                <span>120</span>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
}

export default TopSingleMovies;