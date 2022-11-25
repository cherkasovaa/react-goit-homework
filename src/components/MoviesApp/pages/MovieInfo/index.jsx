import React, { lazy, Suspense } from 'react';
import { Loader } from 'components/ImageGallery/Loader';

const Info = lazy(() => import('components/MoviesApp/components/Info'));

const MovieInfo = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Info />
      </Suspense>
    </>
  );
};

export default MovieInfo;
