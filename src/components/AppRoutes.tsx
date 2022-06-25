import { RouteObject, useRoutes } from 'react-router-dom';

import HomePage from '../pages';

const AppRoutes: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <HomePage />,
    },
  ];

  return useRoutes(routes);
};

export default AppRoutes;
