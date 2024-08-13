import Home from '../home/Home';
import Shop from '../shop/Shop';
import Cart from '../cart/Cart';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <Home />
        <Shop />
        <Cart />
      </nav>
    </>
  );
};

export default Navigation;
