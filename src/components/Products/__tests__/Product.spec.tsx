import { render, screen } from "@testing-library/react";
import { Products } from "../Products";

import { fetchProducts } from '../../../services/products';

const mockedFetchProducts = fetchProducts as jest.Mock;

jest.mock('../../../services/products', () => {
  return {
    fetchProducts: jest.fn()
  }
});

describe('Product component', () => {

  // with mock service worker
  // it('should have Prod2', async () => {
  //   render(<Products />);
  //   screen.debug();

  //   expect(await screen.findByText('Prod2')).toBeInTheDocument();
  // });

  // without mock service worker
  it('should have Prod2', async () => {
    mockedFetchProducts.mockResolvedValue({
      data: {
        records: [{
          id: 1,
          fields: {
            name: 'Prod2',
            price: 123
          }
        }]
      }
    });
    render(<Products />);
    screen.debug();

    expect(await screen.findByText('Prod2')).toBeInTheDocument();
    screen.debug();
  });

  it('should have error', async () => {
    mockedFetchProducts.mockRejectedValue({});

    render(<Products />);
    screen.debug();

    expect(await screen.findByText('Prod2')).toBeInTheDocument();
    screen.debug();
  });
});