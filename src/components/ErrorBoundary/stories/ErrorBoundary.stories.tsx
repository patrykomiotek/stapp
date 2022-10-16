import { ComponentMeta } from '@storybook/react';

import { ErrorBoundary } from '../ErrorBoundary';
import { BuggyComponent } from './BuggyComponent';

export default {
  title: 'UI/Organisms/ErrorBoundary',
  component: ErrorBoundary,
} as ComponentMeta<typeof ErrorBoundary>;

export const _ErrorBoundary = () => (
  <ErrorBoundary>
    <BuggyComponent />
  </ErrorBoundary>
);
