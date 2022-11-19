import React, { useState } from 'react';
import { useEffect } from 'react';
import { MovieInfo, MovieList } from '../MovieList';
import * as S from './style';

export const Home = params => {
  const [movies, setMovies] = useState([]);

  const request =
    'https://api.themoviedb.org/3/trending/all/day?api_key=29cf81a599ffabad205843cb29ab1462';

  useEffect(() => {
    fetch(request)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <S.Container>
      <S.Header>Trending today</S.Header>
      <S.MovieList>
        {movies.map(movie => (
          <MovieList
            key={movie.id}
            id={movie.id}
            path={movie.poster_path}
            title={movie.original_name || movie.original_title}
          />
        ))}
      </S.MovieList>
    </S.Container>
  );
};
