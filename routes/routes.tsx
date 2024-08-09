import Dashboard from '@libs/layouts/dashboard';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('@libs/pages/home'));
const Aboutus = lazy(() => import('@libs/pages/aboutus'));
const Alerts = lazy(() => import('@libs/pages/alerts'));
const Forecast = lazy(() => import('@libs/pages/forecast'));
const News = lazy(() => import('@libs/pages/news'));
const Main = lazy(() => import('@libs/layouts/main'));

const Rout = () => {
  return (
    <Dashboard>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Alerts" element={<Alerts />} />
          <Route path="/Forecast" element={<Forecast />} />
          <Route path="/News" element={<News />} />
          <Route path="/searching/:id" element={<Main />} />
        </Routes>
      </Suspense>
    </Dashboard>
  );
};
export default Rout;
