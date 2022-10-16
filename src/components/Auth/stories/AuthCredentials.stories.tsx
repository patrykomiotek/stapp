import { ComponentMeta } from '@storybook/react';

import { AuthCredentials } from '../AuthCredentials';
import { AuthProvider } from '../AuthProvider';

export default {
  title: 'App/Auth/AuthCredentials',
} as ComponentMeta<typeof AuthCredentials>;


export const _AuthCredentials = () => (
  <AuthCredentials />
);

export const _AuthCredentialsWithProvider = () => (
  <AuthProvider>
    <AuthCredentials />
  </AuthProvider>
);
