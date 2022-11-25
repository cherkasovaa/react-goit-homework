import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { Cast } from './components/Cast';
import { Reviews } from './components/Reviews';
import { Movies } from './pages/Movies';
import MovieInfo from './pages/MovieInfo';
import Home from './pages/Home/Home';

import * as S from './styles';
import { theme } from './variables';

export const MoviesApp = () => {
  const [isDark, setIsDark] = useState(
    !JSON.parse(window.localStorage.getItem('switcherOn')) ?? true
  );

  const navLinksArray = [
    { name: 'home', path: '/' },
    { name: 'movies', path: '/movies' },
  ];

  const checkTheme = value => {
    setIsDark(value);
  };

  return (
    <ThemeProvider theme={isDark ? theme.dark : theme.light}>
      <S.Container>
        <Header links={navLinksArray} checkTheme={checkTheme} />

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
