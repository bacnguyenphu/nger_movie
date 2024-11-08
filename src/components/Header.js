import { RiMovie2Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { FaAngleDown } from "react-icons/fa6";
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/shift-away.css';
import TippyMovieGenre from "./TippyMovieGenre";
import TippyCountries from "./TippyCountries";


function Header({ menu, scrollToTop, conutries, movieGenre, onClickMovieGenre, backToHomePage }) {

    const search = useRef()
    const input = useRef()
    const navigate = useNavigate()
    const [valueInput, setValueInput] = useState('')
    const [showMenu, setShowMenu] = useState(false)

    const showInput = () => {
        if (search.current) {
            search.current.classList.add('lg:w-[300px]'); // Sử dụng toggle để mở/đóng
            input.current.focus()
        }
    };

    const handleSubmitSearch = () => {
        if (valueInput === '') return
        // const inputChuyenDI = encodeURIComponent(removeVietnameseTones(valueInput))
        scrollToTop()
        navigate(`/danh-sach/search/${valueInput}`, { state: { search: valueInput } })
        setValueInput('')
        setShowMenu(false)
    }

    const handlePressEnter = (e) => {
        if (e.keyCode === 13) {
            handleSubmitSearch()
        }
    }

    const hiddenInput = () => {
        if (search.current) {
            search.current.classList.remove('lg:w-[300px]'); // Sử dụng toggle để mở/đóng
            input.current.focus()
            input.current.blur()
        }
    }

    //Hàm này là hàm xoá dấu của tiêng việt
    // const removeVietnameseTones = (str) => {
    //     return str
    //         .normalize('NFD') // Chuẩn hóa chuỗi về dạng tổ hợp
    //         .replace(/[\u0300-\u036f]/g, '') // Xóa các dấu
    //         .replace(/đ/g, 'd') // Thay thế đ thường
    //         .replace(/Đ/g, 'D') // Thay thế Đ hoa
    //         .replace(/\s+/g, ' ') // Xóa khoảng trắng thừa
    //         .trim(); // Xóa khoảng trắng ở đầu và cuối chuỗi
    // };

    const activeStyle = 'relative lg:after:absolute lg:after:w-full lg:after:h-1 lg:after:bg-blue-500 lg:after:bottom-0 lg:after:left-0 lg:after:rounded-xl text-blue-500'

    return (
        <div className="px-2 lg:px-4 xl:px-28 h-[80px] flex items-center fixed bg-black-fade-top z-[100] w-full">
            <div className=" flex lg:flex-row flex-col items-center w-full">
                <div className="logo lg:w-1/4 flex items-center cursor-pointer"
                    onClick={() => { backToHomePage() }}
                >
                    <RiMovie2Line size={'3rem'} color="#2563EB" />
                    <span className="text-3xl font-bold font-serif text-blue-600">NgerMovies</span>
                </div>

                <div className={`bg-[#1A191F] absolute w-[95%] left-0 lg:w-2/4 lg:h-full h-screen lg:bg-transparent top-[80px] lg:top-0 lg:relative lg:block z-50 overflow-y-auto lg:overflow-y-visible duration-700 ${showMenu ? '' : 'translate-x-[-100%] lg:translate-x-[0px]'}`}>

                    <div className="lg:w-1/4 flex lg:hidden justify-start pl-2 pt-5 w-full">
                        <div
                            className="input-search bg-white h-10 flex items-center rounded-full w-[300px] lg:size-[40px] overflow-hidden transition-all duration-700 ease-in-out relative"
                            ref={search}
                            onClick={() => showInput()}
                            onBlur={() => hiddenInput()}
                        >
                            <input
                                className="w-full h-full outline-none border-none pl-2 pr-11"
                                ref={input}
                                onChange={(e) => { setValueInput(e.target.value) }}
                                onKeyDown={(e) => { handlePressEnter(e) }}
                            />
                            <span
                                className="px-2 cursor-pointer absolute right-0 size-[40px] flex items-center"
                                onClick={() => { handleSubmitSearch() }}
                            >
                                <FiSearch size={'1.5rem'} />
                            </span>
                        </div>
                    </div>

                    <div className="xl:text-[17px] lg:flex lg:text-[14px] text-2xl items-center justify-between font-semibold text-white relative">
                        {/* <div className="cursor-pointer">Trang chủ</div>
                    <div className="cursor-pointer">Phim bộ</div>
                    <div className="cursor-pointer">Phim lẻ</div>
                    <div className="cursor-pointer">TV Show</div>
                    <div className="cursor-pointer">Hoạt hình</div> */}
                        {/*  */}
                        {/* <div className="cursor-pointer flex items-center">
                        Quốc gia
                        <span className="ml-1"><FaAngleDown /></span>
                    </div> */}
                        {menu.map((item, index) => {
                            return (
                                <NavLink
                                    key={index}
                                    to={item.path}
                                    className={({ isActive }) => {
                                        return isActive ? activeStyle : ''
                                    }}
                                >
                                    <div className="cursor-pointer py-4 lg:py-0 hover:text-blue-500">
                                        <span className="lg:pl-0 pl-4" onClick={() => scrollToTop()}>
                                            {item.text}
                                        </span>
                                    </div>
                                </NavLink>
                            )
                        })}

                        <div className="cursor-pointer flex lg:flex-row flex-col lg:items-center items-start py-4 relative group">
                            <div className="flex items-center">
                                <span className="lg:pl-0 pl-4">Thể loại</span>
                                <span className="ml-1"><FaAngleDown /></span>
                            </div>
                            <div className="lg:absolute top-14 right-0 lg:hidden group-hover:block animate-slide-top">
                                <TippyMovieGenre movieGenre={movieGenre} onClickMovieGenre={onClickMovieGenre} />
                            </div>
                        </div>

                        <div className="cursor-pointer flex lg:flex-row flex-col lg:items-center items-start py-4 relative group">
                            <div className="flex items-center">
                                <span className="lg:pl-0 pl-4">Quốc gia</span>
                                <span className="ml-1"><FaAngleDown /></span>
                            </div>
                            <div className="lg:absolute top-14 right-0 lg:hidden group-hover:block animate-slide-top">
                                <TippyCountries conutries={conutries} onClickMovieGenre={onClickMovieGenre} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className={`absolute top-24 lg:hidden z-[200] -left-4 duration-700 ${showMenu ? 'translate-x-[380px] rotate-180' : ''}`}
                    onClick={() => { setShowMenu(!showMenu) }}
                >
                    <IoIosArrowDroprightCircle size={'3rem'} color="#2563EB" />
                </div>

                <div className="lg:w-1/4 hidden lg:flex justify-end w-full">
                    <div
                        className="input-search bg-white h-10 flex items-center rounded-full w-[300px] lg:size-[40px] overflow-hidden transition-all duration-700 ease-in-out relative"
                        ref={search}
                        onClick={() => showInput()}
                        onBlur={() => hiddenInput()}
                    >
                        <input
                            className="w-full h-full outline-none border-none pl-2 pr-11"
                            ref={input}
                            onChange={(e) => { setValueInput(e.target.value) }}
                            onKeyDown={(e) => { handlePressEnter(e) }}
                        />
                        <span
                            className="px-2 cursor-pointer absolute right-0 size-[40px] flex items-center"
                            onClick={() => { handleSubmitSearch() }}
                        >
                            <FiSearch size={'1.5rem'} />
                        </span>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default Header;