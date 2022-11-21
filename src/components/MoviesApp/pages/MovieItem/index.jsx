import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import * as S from './styles';

export const MovieItem = ({ id, title, path }) => {
  const location = useLocation();

  return (
    <S.Card>
      <S.CardLink
        to={`${id}`}
        state={{ from: `${location.pathname}${location.search}` }}
      >
        <S.Poster src={`https://image.tmdb.org/t/p/w500${path}`} alt={title} />
        <S.MovieTitle>{title}</S.MovieTitle>.
      </S.CardLink>
    </S.Card>
  );
};

MovieItem.defaultProptypes = {
  id: 1,
  title: '',
  path: '',
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string,
};
