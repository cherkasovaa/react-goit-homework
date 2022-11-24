import { Form } from 'components/MoviesApp/components/Form';
import { MovieList } from 'components/MoviesApp/components/MovieList';
import React, { useMemo, useState } from 'react';
import { getMovies } from '../../api/API';
import * as S from './styles';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = query => {
    if (!query) return;

    setIsLoading(true);
    const promise = getMovies(query);

    promise.then(data => {
      setIsLoading(false);
      setMovies(data);
    });
  };

  return (
    <S.Container>
      <Form onSubmit={handleSubmit} />
      <MovieList list={movies} isLoading={isLoading} />
    </S.Container>
  );
};
