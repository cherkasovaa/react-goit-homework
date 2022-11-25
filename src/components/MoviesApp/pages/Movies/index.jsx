import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from '../../api/API';
import { Loader } from 'components/ImageGallery/Loader';
import { Form } from 'components/MoviesApp/components/Form';
import * as S from './styles';

const MovieList = lazy(() =>
  import('components/MoviesApp/components/MovieList/MovieList')
);

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('query');

  useEffect(() => {
    if (!query && !searchValue) return;

    const promise = getMovies(query || searchValue);

    promise.then(data => {
      setMovies(data.results);
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
      <Suspense fallback={<Loader />}>
        <MovieList list={movies} />
      </Suspense>
    </S.Container>
  );
};

export default Movies;
