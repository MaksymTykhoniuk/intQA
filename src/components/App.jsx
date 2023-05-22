import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const HTML = lazy(() => import('../pages/HTML'));
const JS = lazy(() => import('../pages/JS'));
const REACT = lazy(() => import('../pages/REACT'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/html" element={<HTML />} />
        <Route path="/js" element={<JS />} />
        <Route path="/react" element={<REACT />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
