import React, { lazy, Suspense, useEffect, useState } from 'react';
import * as S from './style';
import { getTrendsMovies } from '../../api/API';
import { Loader } from 'components/ImageGallery/Loader';

const MovieList = lazy(() =>
  import('components/MoviesApp/components/MovieList/MovieList')
);

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendsMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <S.Container>
      <S.Title>Trending today</S.Title>
      <Suspense fallback={<Loader />}>
        <MovieList list={movies} />
      </Suspense>
    </S.Container>
  );
};

export default Home;
