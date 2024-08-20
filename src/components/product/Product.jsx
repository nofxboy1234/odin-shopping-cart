import PropTypes from 'prop-types';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);
  const { addItemToCart, updateItemInCart, removeItemFromCart } =
    useOutletContext();

  console.log('rendering Product');

  return (
    <>
      <div className="product">
        <img
          src={product.image}
          alt={`image of ${product.title}`}
          width="100px"
        />
        <div className="product-info">
          <div>{product.title}</div>
          <div>{product.price.toFixed(2)}</div>
        </div>
        <input
          type="number"
          id="quantity"
          min={1}
          value={quantity}
          onChange={(e) => {
            const newValue = Number(e.target.value);
            setQuantity(Number(newValue));

            if (isInCart) {
              updateItemInCart({ id: product.id, quantity: newValue });
            }
          }}
        />
        <button
          onClick={() => {
            if (isInCart) {
              removeItemFromCart(product.id);
              setIsInCart(false);
              setQuantity(1);
            } else {
              const quantityInCart = addItemToCart({
                id: product.id,
                quantity: quantity,
              });
              setIsInCart(true);
              setQuantity(quantityInCart);
            }
          }}
        >
          {isInCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
      </div>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
