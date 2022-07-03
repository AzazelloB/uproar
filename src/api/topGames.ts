import { useQuery, UseQueryResult } from 'react-query';
import { AxiosResponse } from 'axios';

import { api } from 'api';
import { useAuthContext } from 'context/AuthContext';

import type { Game } from './response';

interface SearchParams {
  first?: number;
  after?: string;
  before?: string;
}

const useTopGames = (params: SearchParams) => {
  const { apiAccessTokenAdded } = useAuthContext();

  return useQuery<UseQueryResult<AxiosResponse<Game[]>>>(
    ['topGames', params],
    () => api.get('https://api.twitch.tv/helix/games/top', { params }),
    {
      enabled: apiAccessTokenAdded,
      keepPreviousData: true,
    },
  );
};

export default useTopGames;
