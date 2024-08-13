import Home from '../home/Home';
import Shop from '../shop/Shop';
import Cart from '../cart/Cart';

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Home />
          </li>
          <li>
            <Shop />
          </li>
          <li>
            <Cart />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
