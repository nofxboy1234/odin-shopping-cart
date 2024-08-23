import CartItem from '../cartItem/CartItem';
import styles from './Cart.module.css';
import CartSummary from '../CartSummary/CartSummary';
import { useOutletContext } from 'react-router-dom';

const Cart = () => {
  const { products } = useOutletContext();

  const cart = products.filter((product) => product.quantity > 0);

  if (cart.length === 0) {
    return <h1 className={styles.heading}>Your shopping cart is empty</h1>;
  }

  return (
    <>
      <h1 className={styles.heading}>Cart</h1>
      <div className={styles.cartContainer}>
        <div className={styles.cart}>
          {cart.map((product) => {
            return <CartItem key={product.id} product={product} />;
          })}
        </div>
        <CartSummary cart={cart} />
      </div>
    </>
  );
};

export default Cart;
