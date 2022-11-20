const API_KEY = '29cf81a599ffabad205843cb29ab1462';

export const getMovies = () =>
  `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;

export const getMovieById = id => {
  const request = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  return fetch(request).then(res => res.json());
};

export const getTrendsMovies = () => {
  const request = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;

  return fetch(request)
    .then(res => res.json())
    .then(data => data.results);
};

export const getCredits = id => {
  const request = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;

  return fetch(request).then(res => res.json());
};

export const getReviews = (id, count = 1) => {
  const request = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=${count}`;
  // const request = `https://api.themoviedb.org/3/movie/338958/reviews?api_key=29cf81a599ffabad205843cb29ab1462&language=en-US&page=1`;

  return fetch(request).then(res => res.json());
};
