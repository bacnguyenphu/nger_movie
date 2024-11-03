import { RiMovie2Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { useRef } from "react";
import { NavLink } from "react-router-dom"
import { FaAngleDown } from "react-icons/fa6";
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/shift-away.css';
import TippyMovieGenre from "./TippyMovieGenre";
import TippyCountries from "./TippyCountries";


function Header({ menu, scrollToTop, conutries, movieGenre,onClickMovieGenre }) {

    const search = useRef()
    const input = useRef()

    const showInput = () => {
        if (search.current) {
            search.current.classList.add('w-[300px]'); // Sử dụng toggle để mở/đóng
            input.current.focus()
        }
    };

    const hiddenInput = () => {
        if (search.current) {
            search.current.classList.remove('w-[300px]'); // Sử dụng toggle để mở/đóng
            input.current.focus()
        }
    }

    const activeStyle = 'relative after:absolute after:w-full after:h-1 after:bg-blue-500 after:bottom-0 after:left-0 after:rounded-xl text-blue-500'

    return (
        <div className="h-[80px] flex items-center bg-black-fade-top fixed z-50 w-full">
            <div className="px-28 flex items-center w-full">
                <div className="logo w-1/4 flex items-center">
                    <RiMovie2Line size={'3rem'} color="#2563EB" />
                    <span className="text-3xl font-bold font-serif text-blue-600">NgerMovie</span>
                </div>

                <div className="w-2/4 flex items-center justify-between text-[17px] font-semibold text-white">
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
                                <div className="cursor-pointer hover:text-blue-500" onClick={() => scrollToTop()}>
                                    {item.text}
                                </div>
                            </NavLink>
                        )
                    })}

                    <Tippy
                        content={<TippyMovieGenre movieGenre={movieGenre} onClickMovieGenre={onClickMovieGenre}/>}
                        interactive={true}
                        placement="bottom-end"
                        animation="shift-away"
                    >
                        <div className="cursor-pointer flex items-center">
                            Thể loại
                            <span className="ml-1"><FaAngleDown /></span>
                        </div>
                    </Tippy>

                    <Tippy
                        content={<TippyCountries conutries={conutries} onClickMovieGenre={onClickMovieGenre}/>}
                        interactive={true}
                        animation="shift-away"
                        placement="bottom-end"
                    >
                        <div className="cursor-pointer flex items-center">
                            Quốc gia
                            <span className="ml-1"><FaAngleDown /></span>
                        </div>
                    </Tippy>


                </div>

                <div className="w-1/4 flex justify-end">
                    <div
                        className="input-search bg-white h-10 flex items-center rounded-full size-[40px] overflow-hidden transition-all duration-500 ease-in-out relative"
                        ref={search}
                        onClick={() => showInput()}
                        onBlur={() => hiddenInput()}
                    >
                        <input
                            className="w-full h-full outline-none border-none pl-2 pr-11"
                            ref={input}
                        />
                        <span
                            className="px-2 cursor-pointer absolute right-0 size-[40px] flex items-center"
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