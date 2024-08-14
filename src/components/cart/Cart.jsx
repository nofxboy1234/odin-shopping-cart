import { useState } from 'react';
import Product from '../product/Product';

// const tempProductIds = ['product 1', 'product 2'];

const Cart = ({ cart, findProduct }) => {
  return (
    <>
      <h1>Cart</h1>
      {cart.map((productId) => {
        return <Product key={productId} product={findProduct(productId)} />;
      })}
    </>
  );
};

export default Cart;
