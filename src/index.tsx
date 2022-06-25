import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import 'index.css';

import AppRoutes from 'components/AppRoutes';
import IntlWrapper from 'components/IntlWrapper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <IntlWrapper>
        <AppRoutes />
      </IntlWrapper>
    </HashRouter>
  </React.StrictMode>,
);
