import PropTypes from 'prop-types';
import { useState } from 'react';

const CartItem = ({ product, updateItemInCart, initialQuantity }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  return (
    <>
      <div className="product">
        <img src={product.imageUrl} alt={`image of ${product.title}`} />
        <div>{product.title}</div>
        <input
          type="number"
          id="quantity"
          min={1}
          value={quantity}
          onChange={(e) => {
            setQuantity(Number(e.target.value));
            updateItemInCart({ id: product.id, quantity: quantity + 1 });
          }}
        />
      </div>
    </>
  );
};

CartItem.propTypes = {
  product: PropTypes.object,
};

export default CartItem;
