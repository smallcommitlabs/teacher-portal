import { AuthOptions } from '@aws-amplify/auth/lib-esm/types';

// These config settings will be injected by octopus

const authConfig: AuthOptions = {
  userPoolId: '#{TeacherUserPoolID}',
  userPoolWebClientId: '#{TeacherUserPoolPortalClientID}',
  region: '#{Region}',
};

const localAuthConfig: AuthOptions = {
  userPoolId: process.env.REACT_APP_USER_POOL_ID,
  userPoolWebClientId: process.env.REACT_APP_WEB_CLIENT_ID,
  region: process.env.REACT_APP_REGION,
};

export default process.env.NODE_ENV === 'development' ? localAuthConfig : authConfig;
