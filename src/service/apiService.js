import axios from '../utils/axiosCustomize'

//Lây phim mới cập nhập theo idPage
const GetNewMoviesUpdated = (idPage)=>{
    return axios.get(`danh-sach/phim-moi-cap-nhat?page=${idPage}`)
}

const GetInforMovie = (slugMovie)=>{
    return axios.get(`phim/${slugMovie}`)
}

const GetSingleMovie = (page,limit)=>{
    return axios.get(`v1/api/danh-sach/phim-le?page=${page}&limit=${limit}`)
}

export {GetNewMoviesUpdated,GetInforMovie,GetSingleMovie}