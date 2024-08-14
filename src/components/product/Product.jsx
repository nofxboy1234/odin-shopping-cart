import PropTypes from 'prop-types';

const Product = ({ product, setCart }) => {
  return (
    <>
      <div className="product">
        <img src={product.imageUrl} alt={`image of ${product.title}`} />
        <div>{product.title}</div>
        <div>{product.quantity}</div>
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
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  quantity: PropTypes.number,
};

export default Product;
