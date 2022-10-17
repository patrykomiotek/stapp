import axios from 'axios';
import type { AxiosResponse } from 'axios';

import type { Product } from '../types/Product';

const api = axios.create({
  baseURL: 'https://api.airtable.com/v0/app4XdB26d9uT2xal',
  headers: {
    Authorization: 'Bearer keyaXt4qtmUYjZljo',
  }
});

export const fetchProducts = (): Promise<AxiosResponse<Product[]>> => {
  return api.get('/products');

  // try {
  //   const response = await axios.get('https://api.airtable.com/v0/app4XdB26d9uT2xal/products')
  //   return response.data;
  // } catch (e) {
  //   // Logger
  // }
}