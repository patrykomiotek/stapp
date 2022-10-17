import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ComponentMeta } from '@storybook/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import { Product } from './Product';

const queryClient = new QueryClient();

export default {
  title: 'App/Product',
  decorators: [(Story) => (
    <MemoryRouter initialEntries={["/products/rec5c99tUqiFYiLb8"]}>
      <Routes>
        <Route path="/products/:id" element={<Story />} />
      </Routes>
    </MemoryRouter>
  )],
} as ComponentMeta<typeof Product>;


export const _Product = () => (
  <QueryClientProvider client={queryClient}>
    <Product />
  </QueryClientProvider>
);
