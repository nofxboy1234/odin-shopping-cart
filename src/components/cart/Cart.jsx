import CartItem from '../cartItem/CartItem';
import styles from './Cart.module.css';
import CartSummary from '../CartSummary/CartSummary';
import { useOutletContext } from 'react-router-dom';

const Cart = () => {
  const { cart, getProductById } = useOutletContext();

  console.log('rendering Cart');

  if (cart.length === 0) {
    return <h1 className={styles.heading}>Your shopping cart is empty</h1>;
  }

  return (
    <>
      <h1 className={styles.heading}>Cart</h1>
      <div className={styles.cartContainer}>
        <div className={styles.cart}>
          {cart.map((item) => {
            return (
              <CartItem
                key={item.id}
                product={getProductById(item.id)}
                initialQuantity={item.quantity}
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
