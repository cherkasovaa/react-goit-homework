import React, { useState } from 'react';
import { useEffect } from 'react';
import { MovieInfo, MovieList } from '../MovieList';
import { getMovies } from '../api/API.js';
import * as S from './style';

export const Home = params => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(getMovies())
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
