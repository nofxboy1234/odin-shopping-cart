import Product from '../product/Product';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Shop = ({
  products,
  addItemToCart,
  updateItemInCart,
  removeItemFromCart,
}) => {
  return (
    <>
      <h1>Shop</h1>
      <div>
        <Link to="food">Food</Link>
      </div>
      <div>
        <Link to="drinks">Drinks</Link>
      </div>
      <Outlet />
      {/* {products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            addItemToCart={addItemToCart}
            updateItemInCart={updateItemInCart}
            removeItemFromCart={removeItemFromCart}
          />
        );
      })} */}
    </>
  );
};

Shop.propTypes = {
  products: PropTypes.array,
};

export default Shop;
