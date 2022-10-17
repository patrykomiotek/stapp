import { useState, useEffect } from 'react';
import { fetchProducts } from '@services/products';

// import type { Product } from '@types/Product';
import type { Product } from '../../types/Product';

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then((response) => console.log(response.data));
  }, []);

  return (
    <div>
      {products && products.map((product) => (
        <div>
          {product.fields.name} {product.fields.price}
        </div>
      ))}
    </div>
  );
}