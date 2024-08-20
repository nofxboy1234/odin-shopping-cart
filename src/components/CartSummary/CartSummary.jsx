import styles from './CartSummary.module.css';
import PropTypes from 'prop-types';

const CartSummary = ({ cart, getProductById }) => {
  console.log('rendering CartSummary');

  return (
    <>
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
    </>
  );
};

CartSummary.propTypes = {
  cart: PropTypes.array,
  getProductById: PropTypes.func,
};

export default CartSummary;
