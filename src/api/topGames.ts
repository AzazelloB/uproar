import { useQuery, UseQueryResult } from 'react-query';
import { AxiosResponse } from 'axios';

import { api } from 'api';
import { useAuthContext } from 'context/AuthContext';

interface SearchParams {
  firts?: number;
  after?: string;
  before?: string;
}

interface Game {
  id: string;
  name: string;
  box_art_url: string;
  pagination: {
    cursor: string;
  };
}

const useTopGames = (params: SearchParams) => {
  const { apiAccessTokenAdded } = useAuthContext();

  return useQuery<UseQueryResult<AxiosResponse<Game[]>>>(
    ['topGames', params],
    () => api.get('https://api.twitch.tv/helix/games/top', { params }),
    {
      enabled: apiAccessTokenAdded,
    },
  );
};

export default useTopGames;
