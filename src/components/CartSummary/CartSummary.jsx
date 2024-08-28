import PropTypes from 'prop-types';
import styled from 'styled-components';

const CartSummary = ({ className, cart }) => {
  return (
    <div className={className}>
      <div className="heading">Cart Summary</div>
      <div className="totalLine">
        <div>
          Total: ({cart.reduce((total, product) => total + product.quantity, 0)}{' '}
          item/s)
        </div>
        <div>
          {cart
            .reduce((total, product) => {
              const subTotal = product.quantity * product.price;
              return total + subTotal;
            }, 0)
            .toFixed(2)}
        </div>
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

  justify-content: center;
  gap: 0.8rem;
  padding: 1rem;
  border: 1px solid rgb(240, 240, 240);
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  height: 180px;
  width: 250px;

  .heading {
    font-weight: bold;
  }

  .totalLine {
    display: flex;
    justify-content: space-between;
  }

  > button {
    background-color: #4e71d3;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 2px;
    height: 35px;
  }
`;

CartSummary.propTypes = {
  cart: PropTypes.array,
  getProductById: PropTypes.func,
};

export default StyledCartSummary;
