import Home from '../home/Home';
import Shop from '../shop/Shop';
import Cart from '../cart/Cart';
import PropTypes from 'prop-types';

const Content = ({ contentIndex }) => {
  return (
    <>
      {contentIndex === 0 && <Home />}
      {contentIndex === 1 && <Shop />}
      {contentIndex === 2 && <Cart />}
    </>
  );
};

Content.propTypes = {
  contentIndex: PropTypes.number.isRequired,
};

export default Content;
