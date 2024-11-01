import { GetNewMoviesUpdated, GetInforMovie } from "../service/apiService";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Slider() {

    const [updateMovies, setUpdateMovie] = useState([]);


    // Hàm lấy phim mới cập nhật
    const fetchNewUpdateMovie = async () => {
        const res = await GetNewMoviesUpdated(1);
        if (res.status === true) {
            setUpdateMovie(res.items);
            // Gọi hàm để thêm thông tin chi tiết cho từng bộ phim
            addInforMovies(res.items);
        }
    };

    // Hàm thêm thông tin cho các bộ phim
    const addInforMovies = async (movies) => {
        const moviesWithInfo = await Promise.all(
            movies.map(async (movie) => {
                const resInfor = await GetInforMovie(movie.slug);
                if (resInfor && resInfor.movie) {
                    return { ...movie, details: resInfor.movie }; // Gộp thông tin chi tiết vào bộ phim
                }
                return movie; // Nếu không có thông tin, trả lại bộ phim gốc
            })
        );
        setUpdateMovie(moviesWithInfo); // Cập nhật state với danh sách phim đã có thông tin
    };

    useEffect(() => {
        fetchNewUpdateMovie();
    }, []);

    console.log('check mov>>', updateMovies);


    return (
        <div className=" slider-container text-white">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                
                {updateMovies.map((updateMovie) => {
                    return (
                        <SwiperSlide>
                            <div
                                key={updateMovie._id}
                                className={`relative h-[590px] w-full bg-center bg-cover cursor-grab active:cursor-grabbing`}
                                style={{ backgroundImage: `url(${updateMovie.thumb_url})` }}
                            // style={{ backgroundImage: `url(${'https://phimimg.com/upload/vod/20241101-1/fe00415d973f491cf6b8acf940ce4d47.jpg'})` }}
                            >
                                <div className=" relative pt-[150px] px-28 z-50 w-[70%]">
                                    <div className="text-2xl font-semibold text-white">
                                        {updateMovie.name}
                                    </div>

                                    <div className="flex items-center gap-5 my-5">
                                        <div className="border rounded-3xl py-1 px-3">
                                            {updateMovie?.details?.type === 'series' ? "Phim bộ" : "Phim lẻ"}
                                        </div>
                                        <div>{updateMovie?.details?.time}</div>
                                        <div>{updateMovie?.details?.year}</div>
                                        <div className="flex items-center gap-1">
                                            <span><FaEye /></span>
                                            <span>{updateMovie?.details?.view}</span>
                                        </div>
                                    </div>

                                    <div className="line-clamp-3">
                                        {updateMovie?.details?.content}
                                    </div>

                                    <div className="my-4">
                                        <div>
                                            Đạo diễn: {updateMovie?.details?.director.join(', ')}
                                        </div>
                                        <div>Diễn viên: {updateMovie?.details?.actor.join(', ')}</div>
                                        <div>Thể loại: {updateMovie?.details?.category.map((item, index) => {
                                            return (
                                                <span key={index}>{item.name}{(index === updateMovie?.details?.category.length - 1) ? ' .' : ' ,'}</span>
                                            )
                                        })}</div>
                                    </div>
                                    <div className=" rounded-lg bg-blue-400 hover:bg-blue-500 px-3 py-2 font-semibold flex w-32 items-center justify-center gap-2">
                                        <span><CiPlay1 /></span>
                                        <button className="">Xem phim</button>
                                    </div>

                                </div>
                                <div className="absolute inset-0 bg-black-fade-bottom"></div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>


        </div>
    );
}

export default Slider;