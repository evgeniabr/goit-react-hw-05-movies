import axios from 'axios';

const API_KEY = '2edac45257d4432a6bdd502a632a4d48';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetch = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  const { results } = response.data;
  return results;
};

export const fetchDetailsFilm = async id => {
  const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const fetchActorList = async id => {
  const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  const { cast } = response.data;
  return cast;
};

export const fetchReviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  const { results } = response.data;
  return results;
};

export const fetchSearchMovies = async query => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const { results } = response.data;
  return results;
};
