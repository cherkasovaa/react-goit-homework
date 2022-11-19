const API_KEY = '29cf81a599ffabad205843cb29ab1462';

export const getMovies = () =>
  `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
