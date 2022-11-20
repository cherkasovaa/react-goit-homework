import React from 'react';
import { useSearchParams } from 'react-router-dom';
import * as S from './styles';

export const Form = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams('');
    return onSubmit(query);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.SearchFormInput
        type="text"
        autoComplete="off"
        placeholder="Search movies"
        value={query ?? ''}
        onChange={e => setSearchParams({ query: e.target.value })}
      />
      <S.SearchButton type="submit">Search</S.SearchButton>
    </S.Form>
  );
};
