import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = ({
  product,
  findProductInCart,
  addItemToCart,
  updateItemInCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);

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

            if (findProductInCart(product.id)) {
              updateItemInCart({ id: product.id, quantity: quantity });
            }
          }}
        />
        <button
          onClick={() => {
            addItemToCart({ id: product.id, quantity: quantity });
            setIsInCart(true);
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
  setCart: PropTypes.func,
};

export default Product;
