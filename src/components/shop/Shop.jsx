import Product from '../product/Product';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Food from '../food/Food';
import Drinks from '../drinks/Drinks';

const Shop = ({
  products,
  addItemToCart,
  updateItemInCart,
  removeItemFromCart,
}) => {
  const { category } = useParams();

  console.log('rendering Shop');
  console.log(`category: ${category}`);

  return (
    <>
      <h1>Shop</h1>
      <div>
        <Link to="/shop/food">Food</Link>
      </div>
      <div>
        <Link to="/shop/drinks">Drinks</Link>
      </div>
      {category === 'food' && <Food />}
      {category === 'drinks' && <Drinks />}

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
