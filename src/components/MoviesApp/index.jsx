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

// TODO: render search movies
// TODO: add back button
// TODO: add color theme

export const MoviesApp = () => {
  const navLinksArray = [
    { name: 'home', path: '/', page: <Home /> },
    { name: 'movies', path: '/movies', page: <Movies /> },
  ];

  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <Header links={navLinksArray} />
        <Routes>
          {navLinksArray.map(({ name, path, page }) => (
            <Route key={name} path={path} element={page} />
          ))}
          <Route path="/:id" element={<MovieInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </S.Container>
    </ThemeProvider>
  );
};
