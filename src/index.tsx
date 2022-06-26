import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'index.css';

import { GlobalProvider } from 'context/GlobalContext';

import AppRoutes from 'components/AppRoutes';
import IntlWrapper from 'components/IntlWrapper';
import { AuthProvider } from 'context/AuthContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <GlobalProvider>
          <IntlWrapper>
            <AuthProvider>
              <AppRoutes />
            </AuthProvider>
          </IntlWrapper>
        </GlobalProvider>
      </QueryClientProvider>
    </HashRouter>
  </React.StrictMode>,
);
