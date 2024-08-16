import CartItem from '../cartItem/CartItem';
import styles from './Cart.module.css';
import CartSummary from '../CartSummary/CartSummary';

const Cart = ({
  cart,
  updateItemInCart,
  getProductById,
  removeItemFromCart,
}) => {
  if (cart.length === 0) {
    return <h1>Your shopping cart is empty</h1>;
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
        <CartSummary cart={cart} getProductById={getProductById} />
      </div>
    </>
  );
};

export default Cart;
