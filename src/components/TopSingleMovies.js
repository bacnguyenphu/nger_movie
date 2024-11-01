import { FaEye } from "react-icons/fa";


function TopSingleMovies() {
    return (
        <div className="text-white">
            <div className="h-[62px] flex items-center justify-center bg-[#19181D]">
                <span>Top phim lẻ</span>
            </div>
            <div>

                <div>
                    <div>
                        <img />
                    </div>
                    <div>
                        <div>Tháng ngày tươi đẹp</div>
                        <div>
                            <span>Lồng tiếng</span>
                            <span>HD</span>
                            <span>2023</span>
                        </div>
                        <div>
                            <span>45 phút/tập</span>
                            <div>
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