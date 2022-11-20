import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMovies } from '../api/API';
import { MovieItem } from '../MovieItem';
import * as S from './styles';

export const Movies = () => {
  const [movies, setMovies] = useState(
    JSON.parse(window.localStorage.getItem('movies')) || []
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    const promise = getMovies(query);
    promise.then(data => {
      setMovies(data);
    });

    setSearchParams('');
  };

  useEffect(() => {
    window.localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

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

      <S.MovieList>
        {movies.map(({ id, poster_path, original_name, original_title }) => (
          <MovieItem
            key={id}
            id={id}
            path={poster_path}
            title={original_name || original_title}
          />
        ))}
      </S.MovieList>
    </S.Container>
  );
};
