import { useNavigate, useSearchParams } from 'react-router-dom';

import { useAuthContext } from 'context/AuthContext';
import { createClient } from 'utils/auth';

const CallbackPage: React.FC = () => {
  const { setToken } = useAuthContext();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const next = searchParams.get('next') || '/';
  const client = createClient(next, false);

  // client-oauth2 can't properly parse query that uses hash router
  const url = document.location.href.replace(/#/, '');

  client.token.getToken(url).then((token) => {
    setToken(token.accessToken);
    navigate(next, { replace: true });
  });

  return null;
};

export default CallbackPage;
