import CartItem from '../cartItem/CartItem';

const Cart = ({ cart, findProduct }) => {
  return (
    <>
      <h1>Cart</h1>
      {cart.map((itemId) => {
        return <CartItem key={itemId} cartItem={findProduct(itemId)} />;
      })}
      <button onClick={() => alert('Thanks for shopping with us!')}>
        Check out
      </button>
    </>
  );
};

export default Cart;
