import axios from 'axios'

const baseURL = 'https://api.themoviedb.org/3/movie';
const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjdiMTJjM2M2NjhiMjNjZThhNmNhMjFiYTE5M2JjYiIsIm5iZiI6MTcyNDgzMjQ5NC41NTE1NTMsInN1YiI6IjY1YTlkNjZjNTM0NjYxMDEzOGNkMTFhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rRVZwTNunIYGQ1-wPudD_JX_4KKTVWUSXtLP5Y4ARqs",
};
const tmdbClient = axios.create({
  baseURL, headers,
})

export const getMoviesOnCategory = async (category) => {
  const url = `/${category}?language=ko-KR&page=1`;
  const res = await tmdbClient.get(url);
  const movies = res.data.results;

  return movies;
};

export const getMovieDetail = async (movieId) => {
  const url = `/${movieId}?language=ko-KR`;
  const res = await tmdbClient.get(url);
  const movieDetail = res.data;
  return movieDetail;
};