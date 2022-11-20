import React from 'react';
import { MovieItem } from 'components/MoviesApp/pages/MovieItem';
import { Loader } from '../Loader';

import * as S from './styles';

export const MovieList = ({ list, isLoading }) => {
  return (
    <S.MovieList>
      {isLoading && <Loader />}
      {!isLoading &&
        list.map(({ id, poster_path, original_name, original_title }) => (
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
