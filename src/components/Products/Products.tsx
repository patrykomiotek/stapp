import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { fetchProducts } from '@services/products';
import { fetchProducts } from '../../services/products';

// import type { Product } from '@types/Product';
import type { Product } from '../../types/Product';

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then((response) => {
      console.log(response.data.records);
      setProducts(response.data.records);
    });
  }, []);

  return (
    <div>
      {products && products.map((product) => (
        <div key={product.id}>
          <h2><Link to={`/products/${product.id}`}>{product.fields.name}</Link></h2>
          <p>{product.fields.price}</p>
        </div>
      ))}
    </div>
  );
}