import Product from '../product/Product';
import PropTypes from 'prop-types';
import { Outlet, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Food from '../food/Food';
import Drinks from '../drinks/Drinks';
import DefaultCategory from '../defaultCategory/DefaultCategory';

const Shop = ({
  products,
  addItemToCart,
  updateItemInCart,
  removeItemFromCart,
}) => {
  const { category } = useParams();

  console.log('rendering Shop');

  return (
    <>
      <h1>Shop</h1>
      <div>
        <Link to="/shop/food">Food</Link>
      </div>
      <div>
        <Link to="/shop/drinks">Drinks</Link>
      </div>
      {category === 'food' ? (
        <Food />
      ) : category === 'drinks' ? (
        <Drinks />
      ) : (
        <DefaultCategory />
      )}
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
