import ClientOAuth2 from 'client-oauth2';

export function createClient(redirectURL?: string, needHash = true) {
  const hashRouterOrigin = `${document.location.origin}${document.location.pathname}${needHash ? '#' : ''}`;
  let redirectURI = `${hashRouterOrigin}/auth/login/callback`;

  if (redirectURL) {
    redirectURI += `?next=${encodeURIComponent(redirectURL)}`;
  }

  return new ClientOAuth2({
    clientId: process.env.REACT_APP_TWITCH_CLIENT_ID,
    clientSecret: process.env.REACT_APP_TWITCH_CLIENT_SECRET,
    accessTokenUri: 'https://id.twitch.tv/oauth2/token',
    authorizationUri: 'https://id.twitch.tv/oauth2/authorize',
    redirectUri: redirectURI,
    scopes: ['user_read'],
  });
}
