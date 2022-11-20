import React from 'react';
import * as S from './style';
import { MovieList } from 'components/MoviesApp/components/MovieList';

export const Home = () => {
  return (
    <S.Container>
      <S.Header>Trending today</S.Header>
      <MovieList />
    </S.Container>
  );
};
