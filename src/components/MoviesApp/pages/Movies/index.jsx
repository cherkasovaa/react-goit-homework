import { Form } from 'components/MoviesApp/components/Form';
import { MovieList } from 'components/MoviesApp/components/MovieList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from '../../api/API';
import * as S from './styles';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('query');

  useEffect(() => {
    if (!query && !searchValue) return;

    setIsLoading(true);
    const promise = getMovies(query || searchValue);

    promise.then(data => {
      setIsLoading(false);
      setMovies(data);
    });
  }, [query, searchValue]);

  const setQueryParam = value => {
    setQuery(value);
    setSearchParams({ query: value });

    if (!value) {
      searchParams.delete('query');
      setSearchParams(searchParams);
      setMovies([]);
    }
  };

  return (
    <S.Container>
      <Form onSubmit={setQueryParam} />
      <MovieList list={movies} isLoading={isLoading} />
    </S.Container>
  );
};
