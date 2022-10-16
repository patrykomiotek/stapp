import { ComponentMeta } from '@storybook/react';

import { AuthInfo } from '../AuthInfo';
import { AuthProvider } from '../AuthProvider';

export default {
  title: 'App/Auth/AuthInfo',
} as ComponentMeta<typeof AuthInfo>;


export const _AuthInfo = () => (
  <AuthInfo />
);

export const _AuthInfoWithProvider = () => (
  <AuthProvider>
    <AuthInfo />
  </AuthProvider>
);
