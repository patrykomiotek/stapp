import { render, screen } from '@testing-library/react';
import { QueryClientProvider, QueryClient, useQuery } from '@tanstack/react-query';

import { Product } from '../Product';

const queryClient = new QueryClient();
const mockedUseQuery = useQuery as jest.Mock;

jest.mock('@tanstack/react-query', () => {
  const originalModule = jest.requireActual('@tanstack/react-query');
  return {
    ...originalModule,
    useQuery: () => ({
      isLoading: false,
      isError: true,
      data: {},
      refetch: jest.fn(),
    }),
    // useQuery: jest.fn()
  }
});

const renderComponent = () => render(
  <QueryClientProvider client={queryClient}><Product /></QueryClientProvider>
);

describe('Product component', () => {
  it.skip('Should display indicator', () => {
    renderComponent();

    expect(screen.getByText(/Loading..../ig)).toBeInTheDocument();
  });
  it('Should display error', () => {
    // mockedUseQuery.mockReturnValue({
    //   isLoading: false,
    //   isError: true,
    //   data: {},
    //   refetch: jest.fn(),
    // });
    renderComponent();
    expect(screen.getByText(/Oh no, error!/ig)).toBeInTheDocument();
  });
  it.todo('Should display header with data');
});