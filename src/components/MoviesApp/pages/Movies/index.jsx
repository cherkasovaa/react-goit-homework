import { MovieList } from 'components/MoviesApp/components/MovieList';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from '../api/API';
import * as S from './styles';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = e => {
    e.preventDefault();

    const promise = getMovies(query);
    promise.then(data => {
      setIsLoading(false);
      setMovies(data);
    });
    setSearchParams('');
  };

  return (
    <S.Container>
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

      <MovieList list={movies} isLoading={isLoading} />
    </S.Container>
  );
};
