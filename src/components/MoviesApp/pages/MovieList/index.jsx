import React from 'react';
import { Link } from 'react-router-dom';
import { MovieInfo } from '../MovieInfo';
import * as S from './styles';

export const MovieList = ({ id, title, path }) => {
  return (
    <S.Card>
      <S.CardLink to={`${id}`}>
        <S.Poster src={`https://image.tmdb.org/t/p/w500${path}`} alt={title} />
        <S.MovieTitle>{title}</S.MovieTitle>.
      </S.CardLink>
    </S.Card>
  );
};
