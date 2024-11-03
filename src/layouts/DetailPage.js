import { Outlet } from "react-router-dom";
import { Header } from "../components";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { GetGenre, GetCountry } from "../service/apiService";
import { useNavigate } from "react-router-dom";

function DetailPage() {

    const navigate = useNavigate()

    const [movieGenre, setMovieGenre] = useState([])
    const [conutries, setGetCountries] = useState([])

    const fetchMovieGenre = async () => {
        let res = await GetGenre()
        if (res) {
            setMovieGenre(res)
        }

    }

    const fetchCountry = async () => {
        let res = await GetCountry()
        if (res) {
            setGetCountries(res)
        }

    }

    const onClickMovieGenre = (slug) => {
        navigate(`/danh-sach/${slug}`, { state: { genre: slug } })
        scrollToTop()
    }

    useEffect(() => {
        fetchMovieGenre()
        fetchCountry()
    }, [])

    const menu = [
        {
            text: "Trang chủ",
            path: '/'
        },
        {
            text: "Phim bộ",
            path: 'danh-sach/filter/phim-bo'
        },
        {
            text: "Phim lẻ",
            path: 'danh-sach/filter/phim-le'
        },
        {
            text: "TV Shows",
            path: 'danh-sach/filter/tv-shows'
        },
        {
            text: "Hoạt hình",
            path: 'danh-sach/filter/hoat-hinh'
        },
    ]

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <div className="bg-[#1A191F]">
            <div><Header menu={menu} scrollToTop={scrollToTop} conutries={conutries} movieGenre={movieGenre} onClickMovieGenre={onClickMovieGenre}/></div>

            <Outlet />

            <div><Footer menu={menu} scrollToTop={scrollToTop} conutries={conutries} movieGenre={movieGenre} onClickMovieGenre={onClickMovieGenre} /></div>
        </div>
    );
}

export default DetailPage;