import { RouteObject, useRoutes } from 'react-router-dom';

import HomePage from 'pages';
import CategoryPage from 'pages/category';

import Layout from './Layout';

const AppRoutes: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout><HomePage /></Layout>,
    },
    {
      path: '/category/:category',
      element: <Layout><CategoryPage /></Layout>,
    },
  ];

  return useRoutes(routes);
};

export default AppRoutes;
