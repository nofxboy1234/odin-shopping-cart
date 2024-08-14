import Product from '../product/Product';
import PropTypes from 'prop-types';

const Shop = ({ products, setCart }) => {
  return (
    <>
      <h1>Shop</h1>
      {products.map((product) => {
        return <Product key={product.id} product={product} setCart={setCart} />;
      })}
    </>
  );
};

Shop.propTypes = {
  products: PropTypes.array,
};

export default Shop;
