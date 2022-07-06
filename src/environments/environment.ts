// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const REST_API_SERVER_BASE = 'http://localhost:8081/';


//Hay que cambiar según confirguración final de horus.
export const environment = {
  REST_API : REST_API_SERVER_BASE,
  production: false,
  // REST_API_SERVER: REST_API_SERVER_BASE + 'auth',
  // REST_API_SERVER_ASPFA: REST_API_SERVER_BASE + 'aspfa/rest',
  // REST_API_SERVER_LNS: REST_API_SERVER_BASE + 'pago/lns',
  // REST_API_SERVER_GENERAL: REST_API_SERVER_BASE + 'general/rest',
  // REST_API_SERVER_NOTA_REVISION: REST_API_SERVER_BASE + 'notaRevision/rest',
  // OAUTH_authority: 'https://localhost:5001/',
  // OAUTH_client_id: 'horus',
  // OAUTH_redirect_uri: 'http://localhost:4201/auth-callback',
  // OAUTH_post_logout_redirect_uri: 'http://localhost:4201/'
};