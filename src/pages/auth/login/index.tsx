import { createClient } from 'utils/auth';

const LoginPage: React.FC = () => {
  // twitch api redirect_uri doesn't support dynamic params
  // const prevURL = usePrevURL();
  // const client = createClient(prevURL);
  const client = createClient();

  window.location.assign(client.token.getUri());

  return null;
};

export default LoginPage;
