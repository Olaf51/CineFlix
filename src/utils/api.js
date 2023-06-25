import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmNhNjFlZTI0NmRlYjE4Mzg5ZGRhYWZhZmY0YzY1YSIsInN1YiI6IjY0OTcyNTg0NjJmMzM1MDE0NjI4N2VlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zKH2zGpYYtOnZJH-h0B4C5Be54Yw6oY793Irj7FnV4s";

const headers = {
    Authorization: `Bearer ${TMDB_TOKEN}`,
}

export const fetchDataFromApi = async (url, params) => {
    try{
       const {data} = await axios.get(`${BASE_URL}${url}`, {
         headers,
         params,
       });
       return data;
    } catch(err){
        console.log(err);
        return err;
    }
}