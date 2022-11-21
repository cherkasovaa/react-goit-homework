import React from 'react';
import PropTypes from 'prop-types';
import { MovieItem } from 'components/MoviesApp/components/MovieItem';
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

MovieList.defaultProptypes = {
  list: [],
  isLoading: false,
};

MovieList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      original_name: PropTypes.string,
      original_title: PropTypes.string,
    })
  ),
};
