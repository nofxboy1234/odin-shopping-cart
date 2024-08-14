import Home from '../home/Home';
import Shop from '../shop/Shop';
import Cart from '../cart/Cart';
import PropTypes from 'prop-types';

const Content = ({
  contentIndex = 0,
  cart,
  setCart,
  products,
  findProduct,
}) => {
  return (
    <>
      <div className="content">
        {contentIndex === 0 && <Home />}
        {contentIndex === 1 && <Shop products={products} setCart={setCart} />}
        {contentIndex === 2 && <Cart cart={cart} findProduct={findProduct} />}
      </div>
    </>
  );
};

Content.propTypes = {
  contentIndex: PropTypes.number.isRequired,
};

export default Content;
