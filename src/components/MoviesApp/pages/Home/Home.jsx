import React, { useEffect, useState } from 'react';
import * as S from './style';
import { getTrendsMovies } from '../../api/API';
import MovieList from 'components/MoviesApp/components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const promise = getTrendsMovies();
    promise.then(data => {
      setIsLoading(false);
      setMovies(data);
    });
  }, []);

  return (
    <S.Container>
      <S.Title>Trending today</S.Title>
      <MovieList list={movies} isLoading={isLoading} />
    </S.Container>
  );
};

export default Home;
