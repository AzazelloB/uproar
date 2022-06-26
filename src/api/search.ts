import { useQuery } from 'react-query';

import { api } from 'api';
import { useAuthContext } from 'context/AuthContext';

interface SearchParams {
  query: string;
  firts?: number;
  after?: string;
}

const useSearch = (params: SearchParams) => {
  const { apiAccessTokenAdded } = useAuthContext();

  return useQuery(
    ['search', params],
    () => api.get('https://api.twitch.tv/helix/search/categories', { params }),
    {
      enabled: apiAccessTokenAdded,
    },
  );
};

export default useSearch;
