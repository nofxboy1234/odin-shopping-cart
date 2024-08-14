import PropTypes from 'prop-types';

const Product = ({ imageUrl = 'imageUrl', title = 'title', quantity = 0 }) => {
  return (
    <>
      <div className="product">
        <img src={imageUrl} alt={`image of ${title}`} />
        <div>{title}</div>
        <div>{quantity}</div>
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
