import { useQuery, UseQueryResult } from 'react-query';
import { AxiosResponse } from 'axios';

import { api } from 'api';
import { useAuthContext } from 'context/AuthContext';

import type { Game } from './response';

interface SearchParams {
  query: string;
  first?: number;
  after?: string;
}

const useSearch = (params: SearchParams) => {
  const { apiAccessTokenAdded } = useAuthContext();

  return useQuery<UseQueryResult<AxiosResponse<Game[]>>>(
    ['search', params],
    () => api.get('https://api.twitch.tv/helix/search/categories', { params }),
    {
      enabled: apiAccessTokenAdded,
    },
  );
};

export default useSearch;
