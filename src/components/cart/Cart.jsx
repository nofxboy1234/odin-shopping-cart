import CartItem from '../cartItem/CartItem';

const Cart = ({ cart, findProduct }) => {
  return (
    <>
      <h1>Cart</h1>
      {cart.map((itemId) => {
        return <CartItem key={itemId} cartItem={findProduct(itemId)} />;
      })}
    </>
  );
};

export default Cart;
