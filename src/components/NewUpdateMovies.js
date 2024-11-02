import { FaRegStar } from "react-icons/fa6";
import { IoMdPlay } from "react-icons/io";
import { GetNewMoviesUpdated } from "../service/apiService";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation } from 'swiper/modules';

function NewUpdateMovies() {

    const [updateMovies, setUpdateMovie] = useState([]);

    const fetchNewUpdateMovie = async () => {

        let temp = []
        for (let i = 2; i <= 4; i++) {
            const res = await GetNewMoviesUpdated(i);
            // console.log('check res', res);

            if (res.status === true) {
                temp = [...temp, res.items]
            }
        }
        setUpdateMovie(temp)
    };

    useEffect(() => {
        fetchNewUpdateMovie();
    }, []);


    return (
        <div className="newupdatemovies px-28 text-white pb-6">
            <div className="flex items-center gap-2 py-5">
                <FaRegStar size={'1.5rem'} color="#2563EB" />
                <span className="font-semibold text-[18px]">Phim mới cập nhập</span>
            </div>

            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation]}
                navigation={true}
                className="mySwiper"
            >
                {updateMovies && updateMovies.length > 0
                    && updateMovies.map((updateMovie, index) => {
                        return (
                            <div key={`updateMovies${index}`}>
                                <SwiperSlide>
                                    <div className="gap-3 grid grid-cols-10">
                                        {updateMovie.map((item, index) => {
                                            return (
                                                <div
                                                    key={`${item._id}-${index}`}
                                                    className={`h-[177px] cursor-pointer flex items-end rounded-lg overflow-hidden bg-center bg-cover bg-no-repeat relative`}
                                                    style={{ backgroundImage: `url(${item.poster_url})` }}
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
                                                        <div className="px-1 text-[13px] font-semibold">{item.name}</div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </SwiperSlide>
                            </div>
                        )
                    })

                }
            </Swiper>

        </div>
    );
}

export default NewUpdateMovies;