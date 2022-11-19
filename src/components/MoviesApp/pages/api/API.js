const API_KEY = '29cf81a599ffabad205843cb29ab1462';

export const getMovies = () =>
  `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;

export const getMovieById = (array, id) => {
  return array.find(movie => movie.id === id);
};

export const getTrendsMovies = () => {
  const request = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;

  return fetch(request)
    .then(res => res.json())
    .then(data => data.results);
};
