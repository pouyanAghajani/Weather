import Dashboard from '@libs/layouts/dashboard';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./Home'));

const Rout = () => {
  return (
    <Dashboard>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Dashboard>
  );
};
export default Rout;
