import { useState } from 'react';

const Cart = () => {
  const [products, setProducts] = useState([]);
  return (
    <>
      <div className="nav-link">Cart</div>
    </>
  );
};

export default Cart;
