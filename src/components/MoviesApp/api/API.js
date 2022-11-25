import axios from 'axios';

const API_KEY = '29cf81a599ffabad205843cb29ab1462';
const API_URL = 'https://api.themoviedb.org/3';

const getData = request => {
  return axios
    .get(request)
    .then(res => res.data)
    .catch(error => console.log(error));
};

export const getMovies = query => {
  const request = `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`;

  return getData(request);
};

export const getMovieById = id => {
  const request = `${API_URL}/movie/${id}?api_key=${API_KEY}`;

  return getData(request);
};

export const getTrendsMovies = () => {
  const request = `${API_URL}/trending/all/day?api_key=${API_KEY}`;

  return getData(request);
};

export const getCredits = id => {
  const request = `${API_URL}/movie/${id}/credits?api_key=${API_KEY}`;

  return getData(request);
};

export const getReviews = (id, count = 1) => {
  const request = `${API_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=${count}`;

  return getData(request);
};
