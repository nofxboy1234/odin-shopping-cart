import Home from '../home/Home';
import Shop from '../shop/Shop';
import Cart from '../cart/Cart';

const Content = ({ contentIndex }) => {
  return (
    <>
      {contentIndex === 0 && <Home />}
      {contentIndex === 1 && <Shop />}
      {contentIndex === 2 && <Cart />}
    </>
  );
};

export default Content;
