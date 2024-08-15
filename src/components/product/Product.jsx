import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = ({ product, setCart }) => {
  const [quantity, setQuantity] = useState(1);

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
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          onClick={() =>
            setCart((cart) => {
              console.log(`Cart before Adding to Cart: ${cart}`);
              return [...cart, product.id];
            })
          }
        >
          Add to Cart
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
