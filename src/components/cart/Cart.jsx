import { useState } from 'react';
import Product from '../product/Product';

const tempProducts = [
  {
    imageUrl: '/products/1',
    quantity: 1,
    title: 'product 1',
  },
  {
    imageUrl: '/products/2',
    quantity: 2,
    title: 'product 2',
  },
];

const Cart = () => {
  const [productIds, setProductIds] = useState(tempProducts);

  return (
    <>
      <h1>Cart</h1>
      {productIds.map((product) => {
        return (
          <Product
            key={product.title}
            imageUrl={product.imageUrl}
            quantity={product.quantity}
            title={product.title}
          />
        );
      })}
    </>
  );
};

export default Cart;
