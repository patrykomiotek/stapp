import { ComponentMeta } from '@storybook/react';

import { Product } from './Product';

export default {
  title: 'App/Product',
} as ComponentMeta<typeof Product>;


export const _Product = () => <Product />
