import Product from '../product/Product';
import PropTypes from 'prop-types';

const Shop = ({ products, addItemToCart, updateItemInCart }) => {
  return (
    <>
      <h1>Shop</h1>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            addItemToCart={addItemToCart}
            updateItemInCart={updateItemInCart}
          />
        );
      })}
    </>
  );
};

Shop.propTypes = {
  products: PropTypes.array,
};

export default Shop;
