import Home from '../home/Home';
import Shop from '../shop/Shop';
import Cart from '../cart/Cart';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <div className="nav-link" onClick={() => console.log('Show Home')}>
          Home
        </div>
        <div className="nav-link" onClick={() => console.log('Show Shop')}>
          Shop
        </div>
        <div className="nav-link" onClick={() => console.log('Show Cart')}>
          Cart
        </div>
      </nav>
    </>
  );
};

export default Navigation;
