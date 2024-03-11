const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=6c7a0dafe896bb27d64a34e925385bbf&primary_release_year=2012&sort_by=popularity.desc&page=1';


export const getTopMovies = () => {
    return fetch(`${API_URL}`);
}


const API_URL_all = 'https://api.themoviedb.org/3/movie/popular?api_key=6c7a0dafe896bb27d64a34e925385bbf';


export const getAllMovies = () => {
    return fetch(`${API_URL_all}`);
}