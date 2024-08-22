import PropTypes from 'prop-types';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import styles from './Product.module.css';

const Product = ({ product }) => {
  const [linkedToCart, setLinkedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { updateProduct } = useOutletContext();

  const addProductToCart = (newQuantity) => {
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

  console.log('rendering Product');

  return (
    <>
      <div className={styles.product}>
        <img
          src={product.image}
          alt={`image of ${product.title}`}
          className={styles.productImage}
        />
        <div>{product.title}</div>
        <div>Price: {product.price.toFixed(2)}</div>
        <input
          type="number"
          id="quantity"
          min={1}
          value={quantity}
          onChange={(e) => {
            const newQuantity = Number(e.target.value);
            if (newQuantity === 0) return;
            setQuantity(newQuantity);

            if (linkedToCart) {
              addProductToCart(newQuantity);
            }
          }}
        />
        <button
          onClick={() => {
            if (linkedToCart) {
              setLinkedToCart(false);
              setQuantity(1);
              removeProductFromCart();
            } else {
              setLinkedToCart(true);
              const newQuantity = quantity + product.quantity;
              setQuantity(newQuantity);
              addProductToCart(newQuantity);
            }
          }}
        >
          {linkedToCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
      </div>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
