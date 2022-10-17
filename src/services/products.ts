import axios from 'axios';
import type { AxiosResponse } from 'axios';

import type { Product } from '../types/Product';

export const fetchProducts = (): Promise<AxiosResponse<Product[]>> => {
  return axios.get('https://api.airtable.com/v0/app4XdB26d9uT2xal/products');

  // try {
  //   const response = await axios.get('https://api.airtable.com/v0/app4XdB26d9uT2xal/products')
  //   return response.data;
  // } catch (e) {
  //   // Logger
  // }
}