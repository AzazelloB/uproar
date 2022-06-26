import { RouteObject, useRoutes } from 'react-router-dom';

import HomePage from 'pages';
import CategoryPage from 'pages/category';
import FAQPage from 'pages/faq';
import AboutPage from 'pages/about';
import SupportPage from 'pages/support';

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
    {
      path: '/faq',
      element: <Layout><FAQPage /></Layout>,
    },
    {
      path: '/about',
      element: <Layout><AboutPage /></Layout>,
    },
    {
      path: '/support',
      element: <Layout><SupportPage /></Layout>,
    },
  ];

  return useRoutes(routes);
};

export default AppRoutes;
