import axios from '../utils/axiosCustomize'

//Lây phim mới cập nhập theo idPage
const GetNewMoviesUpdated = (idPage)=>{
    return axios.get(`danh-sach/phim-moi-cap-nhat?page=${idPage}`)
}

const GetInforMovie = (slugMovie)=>{
    return axios.get(`phim/${slugMovie}`)
}

export {GetNewMoviesUpdated,GetInforMovie}