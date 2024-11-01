import { FaRegStar } from "react-icons/fa6";


function NewUpdateMovies() {
    return ( 
        <div className="new_update_movies px-28 text-white">
            <div className="flex items-center gap-3">
                <span><FaRegStar size={'1.5rem'} color="blue"/></span>
                <span className="font-semibold">Phim mới cập nhập</span>
            </div>
        </div>
     );
}

export default NewUpdateMovies;