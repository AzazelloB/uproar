import { useInfiniteQuery } from 'react-query';

import { api } from 'api';
import { useAuthContext } from 'context/AuthContext';

import type { SearchResponse } from './response';

interface SearchParams {
  query: string;
  first?: number;
  after?: string;
}

const useSearch = (params: SearchParams) => {
  const { apiAccessTokenAdded } = useAuthContext();

  return useInfiniteQuery<SearchResponse>(
    ['search', params],
    async ({ pageParam }) => {
      const response = await api.get(
        'https://api.twitch.tv/helix/search/categories',
        {
          params: {
            ...params,
            after: pageParam,
          },
        },
      );

      return response.data;
    },
    {
      enabled: apiAccessTokenAdded,
      getNextPageParam: (response: any) => response.pagination.cursor,
    },
  );
};

export default useSearch;
