import PropTypes from 'prop-types';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import styles from './CartItem.module.css';

const CartItem = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const { updateProduct } = useOutletContext();

  const updateProductInCart = (newQuantity) => {
    updateProduct({
      ...product,
      quantity: newQuantity,
    });
  };

  const removeProductFromCart = () => {
    updateProduct({
      ...product,
      quantity: 0,
    });
  };

  console.log('rendering CartItem');

  return (
    <>
      <div className={styles.product}>
        <div className={styles.infoContainer}>
          <img
            src={product.image}
            alt={`image of ${product.title}`}
            className={styles.productImage}
          />
          <div className={styles.title}>
            <div>{product.title}</div>
          </div>
        </div>

        <div className={styles.editContainer}>
          <div>{(quantity * product.price).toFixed(2)}</div>
          <input
            type="number"
            id="quantity"
            min={1}
            value={quantity}
            onChange={(e) => {
              const newQuantity = Number(e.target.value);
              if (newQuantity === 0) return;

              setQuantity(newQuantity);

              updateProductInCart(newQuantity);
            }}
          />
          <button
            onClick={() => {
              removeProductFromCart();
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
  initialQuantity: PropTypes.number,
};

export default CartItem;
