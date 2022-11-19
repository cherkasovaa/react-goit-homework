import React, { useState } from 'react';
import { useEffect } from 'react';
import { MovieInfo, MovieList } from '../MovieList';
import { getMovies, getTrendsMovies } from '../api/API.js';
import * as S from './style';
import { Loader } from 'components/MoviesApp/components/Loader';

export const Home = params => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const promise = getTrendsMovies();

    promise.then(data => {
      console.log(data);
      setIsLoading(false);
      setMovies(data);
    });
  }, []);

  return (
    <S.Container>
      <S.Header>Trending today</S.Header>
      <S.MovieList>
        {isLoading && <Loader />}
        {!isLoading &&
          movies.map(({ id, poster_path, original_name, original_title }) => (
            <MovieList
              key={id}
              id={id}
              path={poster_path}
              title={original_name || original_title}
            />
          ))}
      </S.MovieList>
    </S.Container>
  );
};
