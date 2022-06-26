import { useEffect, useState } from 'react';

import { api } from 'api';
import useCurrentUser from 'api/currentUser';
import { createContext } from 'utils/contextCreator';
import useLocalStorage from 'hooks/useLocalStorage';

function useAuthState() {
  const [token, setToken] = useLocalStorage('accessToken', '');
  const [apiAccessTokenAdded, setApiAccessToken] = useState(false);
  const { data } = useCurrentUser(apiAccessTokenAdded);

  useEffect(() => {
    if (!token) {
      return;
    }

    setToken(token);

    const addAccessTokenInterceptor = api.interceptors.request.use((config) => {
      const common = config.headers?.common || {};

      return {
        ...config,
        headers: {
          ...config.headers,
          common: {
            ...common,
            Authorization: `Bearer ${token}`,
            'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID as string,
            Accept: 'application/vnd.twitchtv.v5+json',
          },
        },
      };
    });

    setApiAccessToken(true);

    // eslint-disable-next-line consistent-return
    return () => {
      api.interceptors.request.eject(addAccessTokenInterceptor);
      setToken('');
    };
  }, [token, setToken]);

  return {
    user: data?.data.data[0], token, setToken, apiAccessTokenAdded,
  };
}

const [AuthProvider, useAuthContext] = createContext(useAuthState);

export { AuthProvider, useAuthContext };
