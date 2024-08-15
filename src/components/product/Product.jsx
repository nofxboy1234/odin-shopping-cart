import PropTypes from 'prop-types';

const Product = ({ product, setCart }) => {
  return (
    <>
      <div className="product">
        <img src={product.imageUrl} alt={`image of ${product.title}`} />
        <div>{product.title}</div>
        <input type="number" id="quantity" defaultValue={1} min={1} />
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
