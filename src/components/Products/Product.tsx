import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { fetchProduct } from '../../services/products';

export const Product = () => {
  const params = useParams();
  const { isLoading, isError, data: response, refetch } = useQuery(['orders', params.id], () => fetchProduct(params.id));
  const product = response?.data;

  if (isLoading) {
    return <p>Loading....</p>
  }

  if (isError) {
    return <p>Oh no, error!</p>
  }

  return (
    <div>
      <h1>{product?.fields.name}</h1>
      <p>{product?.fields.description}</p>
      <p><span>{product?.fields.price}</span></p>
      <button onClick={() => refetch()}>Refresh</button>
      <p><Link to="/">Go back</Link></p>
    </div>
  );
}