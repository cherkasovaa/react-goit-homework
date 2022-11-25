import React from 'react';
import PropTypes from 'prop-types';
import { MovieItem } from 'components/MoviesApp/components/MovieItem';

import * as S from './styles';

const MovieList = ({ list }) => {
  return (
    <S.MovieList>
      {list.map(({ id, poster_path, original_name, original_title }) => (
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

export default MovieList;

MovieList.defaultProptypes = {
  list: [],
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
