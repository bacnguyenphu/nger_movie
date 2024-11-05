import { RiMovie2Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { FaAngleDown } from "react-icons/fa6";
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/shift-away.css';
import TippyMovieGenre from "./TippyMovieGenre";
import TippyCountries from "./TippyCountries";


function Header({ menu, scrollToTop, conutries, movieGenre, onClickMovieGenre,backToHomePage }) {

    const search = useRef()
    const input = useRef()
    const navigate = useNavigate()
    const [valueInput, setValueInput] = useState('')

    const showInput = () => {
        if (search.current) {
            search.current.classList.add('w-[300px]'); // Sử dụng toggle để mở/đóng
            input.current.focus()
        }
    };

    const handleSubmitSearch = () => {
        if (valueInput === '') return
        // const inputChuyenDI = encodeURIComponent(removeVietnameseTones(valueInput))
        scrollToTop()
        navigate(`/danh-sach/search/${valueInput}`, { state: { search: valueInput } })
        setValueInput('')
    }

    const handlePressEnter = (e)=>{
        if(e.keyCode===13){
            handleSubmitSearch()
        }
    }

    const hiddenInput = () => {
        if (search.current) {
            search.current.classList.remove('w-[300px]'); // Sử dụng toggle để mở/đóng
            input.current.focus()
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

    const activeStyle = 'relative after:absolute after:w-full after:h-1 after:bg-blue-500 after:bottom-0 after:left-0 after:rounded-xl text-blue-500'

    return (
        <div className="px-2 lg:px-4 xl:px-28 h-[80px] flex items-center fixed bg-black-fade-top z-[100] w-full">
            <div className=" flex items-center w-full">
                <div className="logo lg:w-1/4 flex items-center cursor-pointer"
                    onClick={()=>{backToHomePage()}}
                >
                    <RiMovie2Line size={'3rem'} color="#2563EB" />
                    <span className="text-3xl font-bold font-serif text-blue-600">NgerMovies</span>
                </div>

                <div className="xl:text-[17px] lg:flex text-[14px] hidden w-2/4 items-center justify-between font-semibold text-white">
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
                        content={<TippyMovieGenre movieGenre={movieGenre} onClickMovieGenre={onClickMovieGenre} />}
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
                        content={<TippyCountries conutries={conutries} onClickMovieGenre={onClickMovieGenre} />}
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

                <div className="lg:w-1/4 flex justify-end w-full">
                    <div
                        className="input-search bg-white h-10 flex items-center rounded-full size-[40px] overflow-hidden transition-all duration-500 ease-in-out relative"
                        ref={search}
                        onClick={() => showInput()}
                        onBlur={() => hiddenInput()}
                    >
                        <input
                            className="w-full h-full outline-none border-none pl-2 pr-11"
                            ref={input}
                            onChange={(e) => { setValueInput(e.target.value) }}
                            onKeyDown={(e)=>{handlePressEnter(e)}}
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