import React, { useEffect } from 'react';
import { MovieItem } from 'components/MoviesApp/pages/MovieItem';
import { useState } from 'react';
import { Loader } from '../Loader';
import { getTrendsMovies } from 'components/MoviesApp/pages/api/API';

import * as S from './styles';

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const promise = getTrendsMovies();
    promise.then(data => {
      setIsLoading(false);
      setMovies(data);
    });
  }, []);

  return (
    <S.MovieList>
      {isLoading && <Loader />}
      {!isLoading &&
        movies.map(({ id, poster_path, original_name, original_title }) => (
          <MovieItem
            key={id}
            id={id}
            path={poster_path}
            title={original_name || original_title}
          />
        ))}
    </S.MovieList>
  );
};
