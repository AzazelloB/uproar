import { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';

import { api } from 'api';
import useCurrentUser from 'api/currentUser';
import { createContext } from 'utils/contextCreator';
import useLocalStorage from 'hooks/useLocalStorage';

function useAuthState() {
  const queryClient = useQueryClient();
  const [token, setToken] = useLocalStorage('accessToken', '');
  const [apiAccessTokenAdded, setApiAccessToken] = useState(false);
  const { data } = useCurrentUser(apiAccessTokenAdded);

  const logout = () => {
    setToken('');

    const url = 'https://id.twitch.tv/oauth2/revoke';

    const params = new URLSearchParams({
      client_id: process.env.REACT_APP_TWITCH_CLIENT_ID!,
      token,
    });

    api.post(`${url}?${params.toString()}`);
  };

  useEffect(() => {
    if (!token) {
      setApiAccessToken(false);
      queryClient.clear();
      return;
    }

    setToken(token);

    const addAccessTokenInterceptor = api.interceptors.request.use((config) => {
      const common = config.headers?.common || {};

      if (config.method === 'post') {
        return {
          ...config,
          headers: {
            ...config.headers,
            common: {
              ...common,
              Authorization: `Bearer ${token}`,
              Accept: 'application/vnd.twitchtv.v5+json',
            },
          },
        };
      }

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
  }, [token, setToken, queryClient]);

  return {
    user: data?.data.data[0],
    logout,
    token,
    setToken,
    apiAccessTokenAdded,
  };
}

const [AuthProvider, useAuthContext] = createContext(useAuthState);

export { AuthProvider, useAuthContext };
