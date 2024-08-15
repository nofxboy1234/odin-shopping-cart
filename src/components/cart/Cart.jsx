import CartItem from '../cartItem/CartItem';

const Cart = ({
  cart,
  updateItemInCart,
  getProductById,
  removeItemFromCart,
}) => {
  return (
    <>
      <h1>Cart</h1>
      {cart.map((item) => {
        return (
          <CartItem
            key={item.id}
            product={getProductById(item.id)}
            updateItemInCart={updateItemInCart}
            initialQuantity={item.quantity}
            removeItemFromCart={removeItemFromCart}
          />
        );
      })}
      <button onClick={() => alert('Thanks for shopping with us!')}>
        Check out
      </button>
    </>
  );
};

export default Cart;
