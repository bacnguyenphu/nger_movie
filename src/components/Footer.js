import { RiMovie2Line } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Footer({ menu, scrollToTop, conutries, movieGenre, onClickMovieGenre,backToHomePage }) {

    let tempMovieGenre = []
    let tempGetCountries = []
    const navigate = useNavigate()

    if (movieGenre && movieGenre.length > 0) {
        tempMovieGenre = movieGenre.slice(movieGenre.length - 6, movieGenre.length - 1)
    }

    if (conutries && conutries.length > 0) {
        tempGetCountries = conutries.slice(0, 5)
    }


    const infor = [
        {
            text: "Giới thiệu",
            path: '/'
        },
        {
            text: "Liên hệ chúng tôi",
            path: '/'
        },
        {
            text: "Điều khoản sử dụng",
            path: '/'
        },
        {
            text: "Chính sách riêng tư",
            path: '/'
        },
        {
            text: "Khiếu nại bản quyền",
            path: '/'
        },
    ]

    return (
        <div className="px-28 bg-[#151419] py-10 flex">
            <div className=" w-[30%]">
                <div className="logo w-1/4 flex items-center cursor-pointer cursor-pointer"
                    onClick={()=>{backToHomePage()}}
                >
                    <span><RiMovie2Line size={'3rem'} color="#2563EB" /></span>
                    <span className="text-3xl font-bold font-serif text-blue-600">NgerMovie</span>
                </div>
                <div className="text-gray-400 text-[12px] my-3">
                    <Link to={'/'} className="text-blue-600 text-base">NgerMovie</Link> Xem phim mới miễn phí nhanh chất lượng cao. Phimmoi online Việt Sub, Thuyết minh, lồng tiếng chất lượng HD. Xem phim nhanh online chất lượng cao
                </div>
                <div className="text-gray-400 text-[12px]">
                    Copyright 2024 © <Link to={'/'} className="text-blue-600 text-base">NgerMovie</Link>
                </div>
            </div>

            <div className=" w-[70%] flex pl-10">
                <div className="flex gap-16">
                    <div className="flex flex-col text-white">
                        <div className="font-bold text-gray-600 text-xl mb-7">Danh mục</div>
                        {menu.map((item, index) => {
                            return (
                                <NavLink
                                    key={index}
                                    to={item.path}
                                >
                                    <div className="cursor-pointer hover:text-blue-500 text-[14px] mb-1" onClick={() => scrollToTop()}>
                                        {item.text}
                                    </div>
                                </NavLink>
                            )
                        })}
                    </div>

                    <div className="flex flex-col text-white">
                        <div className="font-bold text-gray-600 text-xl mb-7">
                            Thể loại
                        </div>
                        {tempMovieGenre && tempMovieGenre.length > 0 &&
                            tempMovieGenre.map((item) => {
                                return (
                                    <div
                                        key={item._id}
                                    >
                                        <div
                                            className="cursor-pointer hover:text-blue-500 text-[14px] mb-1"
                                            onClick={() => { onClickMovieGenre(item.slug) }}
                                        >
                                            {item.name}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="flex flex-col text-white">
                        <div className="font-bold text-gray-600 text-xl mb-7">
                            Quốc gia
                        </div>
                        {tempGetCountries && tempGetCountries.length > 0 &&
                            tempGetCountries.map((item, index) => {
                                return (
                                    <div
                                        key={item._id}
                                    >
                                        <div
                                            className="cursor-pointer hover:text-blue-500 text-[14px] mb-1"
                                            onClick={() => { onClickMovieGenre(item.slug) }}
                                        >
                                            {item.name}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="flex flex-col text-white">
                        <div className="font-bold text-gray-600 text-xl mb-7">Thông tin</div>
                        {infor.map((item, index) => {
                            return (
                                <NavLink
                                    key={index}
                                >
                                    <div className="cursor-pointer hover:text-blue-500 text-[14px] mb-1">
                                        {item.text}
                                    </div>
                                </NavLink>
                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;