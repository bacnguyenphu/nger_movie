import { GetNewMoviesUpdated, GetInforMovie } from "../service/apiService";
import {  useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";
import { watchMovieContext } from "../App";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Banner from "./Banner";

function Slider() {

    const [updateMovies, setUpdateMovie] = useState([]);

    const fetchNewUpdateMovie = async () => {
        const res = await GetNewMoviesUpdated(1);
        if (res.status === true) {
            updateInforMovies(res.items);
        }
    };

    const updateInforMovies = async (movies) => {
        const moviesWithInfo = await Promise.all(
            movies.map(async (movie) => {
                const resInfor = await GetInforMovie(movie.slug);
                if (resInfor && resInfor.movie) {
                    return  resInfor.movie ; 
                }
                return movie; 
            })
        );
        setUpdateMovie(moviesWithInfo); 
    };

    useEffect(() => {
        fetchNewUpdateMovie();
    }, []);

    return (
        <div className=" slider-container text-white">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000, // Đặt thời gian delay (3 giây cho mỗi slide)
                    disableOnInteraction: false, // Giữ autoplay khi người dùng tương tác
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >

                {updateMovies.map((updateMovie, index) => {
                    return (
                        <div key={`update${updateMovie._id}-${index}`}>
                            <SwiperSlide>
                               <Banner movie={updateMovie} hiddenInfor={false}/>
                            </SwiperSlide>
                        </div>
                    )
                })}
            </Swiper>


        </div>
    );
}

export default Slider;