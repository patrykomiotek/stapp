import { useState, useEffect } from 'react';

import type { Product as ProductDto } from '../../types/Product';
import { fetchProduct } from '../../services/products';

export const Product = () => {
  const [product, setProduct] = useState<ProductDto | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetchProduct('rec9poYzLSg6b61Nh');
      setProduct(response.data);
      setIsLoading(false);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
    </div>
  );
}