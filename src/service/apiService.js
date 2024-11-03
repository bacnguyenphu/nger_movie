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

const GetSeriesMovie = (page,limit)=>{
    return axios.get(`v1/api/danh-sach/phim-bo?page=${page}&limit=${limit}`)
}

const GetCartoon = (page,limit)=>{
    return axios.get(`v1/api/danh-sach/hoat-hinh?page=${page}&limit=${limit}`)
}

const GetTvShows = (page,limit)=>{
    return axios.get(`v1/api/danh-sach/tv-shows?page=${page}&limit=${limit}`)
}

const GetGenre = ()=>{
    return axios.get(`the-loai`)
}

const GetCountry = ()=>{
    return axios.get(`quoc-gia`)
}

const GetMovieGenre = (genre,page,limit)=>{
    return axios.get(`v1/api/the-loai/${genre}?page=${page}&limit=${limit}`)
}


export {GetNewMoviesUpdated,GetInforMovie,GetSingleMovie,GetSeriesMovie,GetCartoon,GetGenre,GetCountry,GetTvShows,GetMovieGenre,}