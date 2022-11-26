import React, { lazy, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import WithSuspense from './components/WithSuspense';

import * as S from './styles';
import { theme } from './variables';

const Cast = lazy(() => import('./components/Cast'));
const Reviews = lazy(() => import('./components/Reviews'));
const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieInfo = lazy(() => import('./pages/MovieInfo'));

export const MoviesApp = () => {
  const [isDark, setIsDark] = useState(
    !JSON.parse(window.localStorage.getItem('switcherOn')) ?? true
  );

  const navLinksArray = [
    { name: 'home', path: '/react-goit-homework', isFirst: true },
    { name: 'movies', path: '/react-goit-homework/movies', isFirst: false },
  ];

  const checkTheme = value => {
    setIsDark(value);
  };

  return (
    <ThemeProvider theme={isDark ? theme.dark : theme.light}>
      <S.Container>
        <Header links={navLinksArray} checkTheme={checkTheme} />

        <Routes>
          <Route
            path="react-goit-homework/"
            element={WithSuspense(Home)}
          ></Route>
          <Route
            path="react-goit-homework/:id"
            element={WithSuspense(MovieInfo)}
          >
            <Route path="cast" element={WithSuspense(Cast)} />
            <Route path="reviews" element={WithSuspense(Reviews)} />
          </Route>

          <Route
            path="/react-goit-homework/movies"
            element={WithSuspense(Movies)}
          />
          <Route
            path="/react-goit-homework/movies/:id"
            element={WithSuspense(MovieInfo)}
          >
            <Route path="cast" element={WithSuspense(Cast)} />
            <Route path="reviews" element={WithSuspense(Reviews)} />
          </Route>
        </Routes>
      </S.Container>
    </ThemeProvider>
  );
};
