import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Cast } from './components/Cast';
import Header from './components/Header';
import { Reviews } from './components/Reviews';
import { Home } from './pages/Home';
import { MovieInfo } from './pages/MovieInfo';
import { Movies } from './pages/Movies';
import * as S from './styles';
import { theme } from './variables';

// TODO: add color theme

export const MoviesApp = () => {
  const navLinksArray = [
    { name: 'home', path: '/' },
    { name: 'movies', path: '/movies' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <Header links={navLinksArray} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<MovieInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </S.Container>
    </ThemeProvider>
  );
};
