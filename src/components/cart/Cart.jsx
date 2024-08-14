import Product from '../product/Product';

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
