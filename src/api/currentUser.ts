import { useQuery } from 'react-query';

import { api } from 'api';

const useCurrentUser = (enabled: boolean) => {
  return useQuery('currentUser', () => api.get('https://api.twitch.tv/helix/users'), {
    enabled,
  });
};

export default useCurrentUser;
