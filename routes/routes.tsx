import Dashboard from '@libs/layouts/dashboard';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('@libs/pages/home'));
const Aboutus = lazy(() => import('@libs/pages/aboutus'));
const Alerts = lazy(() => import('@libs/pages/alerts'));
const Forecast = lazy(() => import('@libs/pages/forecast'));
const News = lazy(() => import('@libs/pages/news'));
const Main = lazy(() => import('@libs/layouts/main'));
const ContactUs = lazy(() => import('@libs/pages/ContactUs'));
const Privacy = lazy(() => import('@libs/pages/Privacy'));
const Terms = lazy(() => import('@libs/pages/Terms'));
const Faq = lazy(() => import('@libs/pages/faq'));

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
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Faq" element={<Faq />} />
        </Routes>
      </Suspense>
    </Dashboard>
  );
};
export default Rout;
