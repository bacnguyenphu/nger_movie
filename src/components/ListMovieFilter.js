import { useState, useEffect, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { GetSeriesMovie, GetSingleMovie, GetCartoon, GetTvShows, GetMovieGenre, GetMovieCountry, GetSearchMovie } from "../service/apiService";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoMdPlay } from "react-icons/io";
import ReactPaginate from 'react-paginate';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { watchMovieContext } from "../App";

function ListMovieFilter() {

    // const removeVietnameseTones = (str) => {
    //     return str
    //         .normalize('NFD') // Chuẩn hóa chuỗi về dạng tổ hợp
    //         .replace(/[\u0300-\u036f]/g, '') // Xóa các dấu
    //         .replace(/đ/g, 'd') // Thay thế đ thường
    //         .replace(/Đ/g, 'D') // Thay thế Đ hoa
    //         .replace(/\s+/g, ' ') // Xóa khoảng trắng thừa
    //         .trim(); // Xóa khoảng trắng ở đầu và cuối chuỗi
    // };

    const param = useParams()
    const location = useLocation()
    const genre = location.state?.genre
    const search = location.state?.search
    const [listMovie, setListMovie] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [titlePage, setTitlePage] = useState('Sorry')

    const navigateWatchMovie = useContext(watchMovieContext)

    useEffect(() => {
        fetchMovies()
        // test()
    }, [currentPage, param.filter, genre,search])

    const fetchMovies = async () => {

        if (param.filter === 'phim-bo') {
            const res = await GetSeriesMovie(currentPage, 29)
            if (res.status === 'success') {
                setListMovie(res.data.items)
                setTitlePage(res.data.breadCrumb[0].name)
                setTotalPages(res.data.params.pagination.totalPages)
            }
        }
        else if (param.filter === 'phim-le') {
            const res = await GetSingleMovie(currentPage, 29)
            if (res.status === 'success') {
                setListMovie(res.data.items)
                setTitlePage(res.data.breadCrumb[0].name)
                setTotalPages(res.data.params.pagination.totalPages)
            }
        }
        else if (param.filter === 'tv-shows') {
            const res = await GetTvShows(currentPage, 29)
            if (res.status === 'success') {
                setListMovie(res.data.items)
                setTitlePage(res.data.breadCrumb[0].name)
                setTotalPages(res.data.params.pagination.totalPages)
            }
        }
        else if (param.filter === 'hoat-hinh') {
            const res = await GetCartoon(currentPage, 29)
            if (res.status === 'success') {
                setListMovie(res.data.items)
                setTitlePage(res.data.breadCrumb[0].name)
                setTotalPages(res.data.params.pagination.totalPages)
            }
        }
        else {
            if (param?.genre === genre&&genre) {
                const res = await GetMovieGenre(genre, currentPage, 29)
                if (res.status === 'success' && res.data.params.pagination.totalItems > 0) {
                    setListMovie(res.data.items)
                    setTitlePage(res.data.breadCrumb[0].name)
                    setTotalPages(res.data.params.pagination.totalPages)
                }
                else {
                    const res = await GetMovieCountry(genre, currentPage, 29)
                    if (res.status === 'success' && res.data.params.pagination.totalItems > 0) {
                        setListMovie(res.data.items)
                        setTitlePage(res.data.breadCrumb[0].name)
                        setTotalPages(res.data.params.pagination.totalPages)
                    }
                    else {
                        setListMovie([])
                        setTitlePage('nôn')
                        setTotalPages(1)
                    }
                }
            }
            else {
                if (param?.search === search) {
                    const res = await GetSearchMovie(encodeURIComponent(search), currentPage, 29)
                    if (res.status === 'success') {
                        setListMovie(res.data.items)
                        setTitlePage(res.data.titlePage)
                        setTotalPages(res.data.params.pagination.totalPages)
                    }
                }
                else {
                    setListMovie([])
                    setTitlePage('')
                    setTotalPages(1)
                }
            }
            // else {
            //     setListMovie([])
            //     setTitlePage('')
            //     setTotalPages(1)
            // }
        }
    }

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1)
        scrollToTop()
    };

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }



    // test
    // const test = async () => {
    //     if (param?.search === search) {
    //         const res = await GetSearchMovie(encodeURIComponent(search), currentPage, 29)
    //         console.log('check search movie', res);
    //     }
    // }

    return (
        <div id="section1" className="text-white">
            <div className="flex items-center gap-3 py-5">
                <span><BiSolidMoviePlay size={'1.5rem'} color="#2563EB" /></span>
                <span className="font-semibold text-[18px]">Danh sách {titlePage}</span>
            </div>

            <div className="grid grid-cols-6 grid-rows-3 gap-[10px]">

                {listMovie && listMovie.length > 0 &&
                    listMovie.map(item => {
                        return (
                            <div
                                key={`${item._id}`}
                                className={`h-[223px] cursor-pointer flex items-end rounded-lg overflow-hidden bg-center bg-cover bg-no-repeat duration-200 hover:shadow-custom hover:scale-125 hover:z-50 relative`}
                                style={{ backgroundImage: `url(https://phimimg.com/${item.poster_url})` }}
                                onClick={() => { navigateWatchMovie(item.slug) }}
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
                    || <div>Không có kết quả</div>
                }

            </div>
            <div className="mt-20">
                <ReactPaginate
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={totalPages}
                    nextLabel={<span><MdOutlineKeyboardDoubleArrowRight size={'1.5rem'} /></span>}
                    previousLabel={<span><MdOutlineKeyboardDoubleArrowLeft size={'1.5rem'} /></span>}
                    previousLinkClassName="block px-3 py-2 border border-gray-300 rounded hover:bg-blue-500"
                    nextLinkClassName="block px-3 py-2 border border-gray-300 rounded hover:bg-blue-500"
                    breakLabel="..."
                    pageClassName="mx-1"
                    pageLinkClassName="block px-3 py-2 overflow-hidden border border-gray-300 rounded hover:bg-blue-500"
                    previousClassName="mx-1"
                    nextClassName="mx-1"
                    breakClassName="mx-1"
                    breakLinkClassName="block px-3 py-2 border border-gray-300 rounded hover:bg-blue-500"
                    containerClassName=" flex justify-center mt-4 items-center"
                    activeClassName="bg-blue-500 overflow-hidden text-white"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    );
}

export default ListMovieFilter;