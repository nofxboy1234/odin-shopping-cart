import styles from './CartSummary.module.css';
import PropTypes from 'prop-types';

const CartSummary = ({ cart }) => {
  return (
    <>
      <div className={styles.cartSummary}>
        <div>Cart Summary</div>
        <div>
          Total: ({cart.reduce((total, product) => total + product.quantity, 0)}{' '}
          items)
        </div>
        <div>
          {cart
            .reduce((total, product) => {
              const subTotal = product.quantity * product.price;
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
