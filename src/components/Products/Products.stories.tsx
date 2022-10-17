import { ComponentMeta } from '@storybook/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import { Products } from './Products';

export default {
  title: 'App/Products',
  decorators: [(Story) => (
    <MemoryRouter initialEntries={["/products"]}>
      <Routes>
        <Route path="/products" element={<Story />} />
      </Routes>
    </MemoryRouter>
  )],
} as ComponentMeta<typeof Products>;


export const _Product = () => <Products />
