import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjlhYWMxNGVjYjBmNjg1NTAwM2VlZTZkZGY2MmE2NyIsIm5iZiI6MTcyMzgwMDc3MS44NjY2NjQsInN1YiI6IjY2YmYxOTE4ZDQ2NGIyYTA3MDk3YjlkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j88skHH49BFBCNXKfP5gXRD3mb-YiBFC4-DX9PkRZ2E";

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getTrending = async () => {
  const response = await axios.get("/trending/movie/day", options);

  return response.data;
};

export const searchMovies = async (query) => {
  const params = {
    query,
    include_adult: false,
    language: "en-US",
    page: 1,
  };
  const response = await axios.get("/search/movie", { ...options, params });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`, options);
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`, options);
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, options);
  return response.data.results;
};
