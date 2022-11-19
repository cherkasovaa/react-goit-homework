import React from 'react';
import * as S from './styles';

export const Movies = params => {
  return (
    <S.Container>
      <S.Form action="get">
        <S.SearchFormInput
          type="text"
          autoComplete="off"
          placeholder="Search movies"
        />
        <S.SearchButton type="submit">Search</S.SearchButton>
      </S.Form>
    </S.Container>
  );
};
