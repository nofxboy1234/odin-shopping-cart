import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './CartItem.module.css';

const CartItem = ({
  product,
  updateItemInCart,
  initialQuantity,
  removeItemFromCart,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  return (
    <>
      <div className="product">
        <img src={product.imageUrl} alt={`image of ${product.title}`} />
        <div className={styles.itemRow}>
          <div>{product.title}</div>
          <input
            type="number"
            id="quantity"
            min={1}
            value={quantity}
            onChange={(e) => {
              const newValue = Number(e.target.value);
              setQuantity(Number(newValue));

              updateItemInCart({ id: product.id, quantity: newValue });
            }}
          />
          <div>{product.price.toFixed(2)}</div>
          <div>{(quantity * product.price).toFixed(2)}</div>
          <button
            onClick={() => {
              removeItemFromCart(product.id);
            }}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </>
  );
};

CartItem.propTypes = {
  product: PropTypes.object,
};

export default CartItem;
