import CartItem from '../cartItem/CartItem';
import styles from './Cart.module.css';

const Cart = ({
  cart,
  updateItemInCart,
  getProductById,
  removeItemFromCart,
}) => {
  if (cart.length === 0) {
    return <div>Your shopping cart is empty</div>;
  }

  return (
    <>
      <h1>Cart</h1>
      <div className={styles.cart}>
        <div className={styles.cartItems}>
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
        </div>
        <div className={styles.cartSummary}>
          <div>Cart Summary</div>
          <div>
            Total: (
            {cart.reduce((total, cartItem) => total + cartItem.quantity, 0)}{' '}
            items)
          </div>
          <div>
            {cart
              .reduce((total, cartItem) => {
                const subTotal =
                  cartItem.quantity * getProductById(cartItem.id).price;
                return total + subTotal;
              }, 0)
              .toFixed(2)}
          </div>
          <button onClick={() => alert('Thanks for shopping with us!')}>
            Check out
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
