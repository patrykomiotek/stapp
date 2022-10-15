import { ComponentMeta } from '@storybook/react';

import { Layout } from './Layout';
import { Header, Footer } from './components';

export default {
  title: 'UI/Organisms/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

export const _Layout = () => (
  <Layout
    header={
      <Header isLoggedIn={false} />
    }
    footer={
      <Footer />
    }>
    <p>Layout</p>
  </Layout>
);

