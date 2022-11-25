import React, { Suspense } from 'react';
import { Loader } from './Loader';

const WithSuspense = Component => {
  return (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );
};

export default WithSuspense;
