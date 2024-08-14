import PropTypes from 'prop-types';

const CartItem = ({ cartItem }) => {
  return (
    <>
      <div className="product">
        <img src={cartItem.imageUrl} alt={`image of ${cartItem.title}`} />
        <div>{cartItem.title}</div>
        <div>{cartItem.quantity}</div>
      </div>
    </>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object,
};

export default CartItem;
