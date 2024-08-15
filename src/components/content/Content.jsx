import Home from '../home/Home';
import Shop from '../shop/Shop';
import Cart from '../cart/Cart';
import PropTypes from 'prop-types';

const Content = ({
  contentIndex = 0,
  cart,
  products,
  addItemToCart,
  updateItemInCart,
  getProductById,
  removeItemFromCart,
}) => {
  return (
    <>
      <div className="content">
        {contentIndex === 0 && <Home />}
        {contentIndex === 1 && (
          <Shop
            products={products}
            addItemToCart={addItemToCart}
            updateItemInCart={updateItemInCart}
            removeItemFromCart={removeItemFromCart}
          />
        )}
        {contentIndex === 2 && (
          <Cart
            cart={cart}
            updateItemInCart={updateItemInCart}
            getProductById={getProductById}
            removeItemFromCart={removeItemFromCart}
          />
        )}
      </div>
    </>
  );
};

Content.propTypes = {
  contentIndex: PropTypes.number.isRequired,
};

export default Content;
