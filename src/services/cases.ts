import axios from 'axios';
import type { AxiosResponse } from 'axios';

import type { Case } from '../types/Case';

export const BASE_URL = 'https://api.airtable.com/v0/app4XdB26d9uT2xal';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: 'Bearer keyaXt4qtmUYjZljo',
  }
});

export type CaseResponse = {
  records: Case[]
}

export const fetchCases = (): Promise<AxiosResponse<CaseResponse>> => {
  return api.get('/cases');
}

export const fetchCase = (id: string | undefined): Promise<AxiosResponse<Case>> => {
  return api.get(`/cases/${id}`);
}

export const postCase = (data: any): Promise<AxiosResponse<Case>> => {
  console.log('data: ', data);
  return api.put(`/cases`, {
    "records": [
      {
        "id": data.id,
        "fields": {
          case_id: "C-4",
          case_number: data.fields.case_number,
        }
      }
    ]
  });
}