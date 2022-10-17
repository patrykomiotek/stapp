import { rest } from 'msw'

import type { ProductResponse } from '../services/products';
import { BASE_URL } from '../services/products';

export const handlers = [
  rest.get<ProductResponse>(`${BASE_URL}/products`, (req, res, ctx) => {
    return res(
      ctx.delay(2000),
      ctx.status(200),
      ctx.json({
        records: [{
          id: 1,
          fields: {
            name: 'Prod1',
            price: 123
          }
        }, {
          id: 2,
          fields: {
            name: 'Prod2',
            price: 567
          }
        }]
      })
    );
  })

];

  // rest.post('/login', (req, res, ctx) => {
  //   const { username } = req.body

  //   return res(
  //     ctx.json({
  //       id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
  //       username,
  //       firstName: 'John',
  //       lastName: 'Maverick',
  //     })
  //   )
  // }),