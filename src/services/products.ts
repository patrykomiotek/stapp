import axios from 'axios';
import type { AxiosResponse } from 'axios';

import type { Product } from '../types/Product';

export const BASE_URL = 'https://api.airtable.com/v0/app4XdB26d9uT2xal';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: 'Bearer keyaXt4qtmUYjZljo',
  }
});

export type ProductResponse = {
  records: Product[]
}

export const fetchProducts = (): Promise<AxiosResponse<ProductResponse>> => {
  return api.get('/products');

  // try {
  //   const response = await axios.get('https://api.airtable.com/v0/app4XdB26d9uT2xal/products')
  //   return response.data;
  // } catch (e) {
  //   // Logger
  // }
}

export const fetchProduct = (id: string | undefined): Promise<AxiosResponse<Product>> => {
  return api.get(`/products/${id}`);
}