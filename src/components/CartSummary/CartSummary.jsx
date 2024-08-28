import PropTypes from 'prop-types';
import styled from 'styled-components';

const CartSummary = ({ className, cart }) => {
  return (
    <div className={className}>
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
  );
};

const StyledCartSummary = styled(CartSummary)`
  display: flex;
  flex-direction: column;
`;

CartSummary.propTypes = {
  cart: PropTypes.array,
  getProductById: PropTypes.func,
};

export default StyledCartSummary;
