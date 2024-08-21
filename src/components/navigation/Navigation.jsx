import styles from './Navigation.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = ({ cartCount }) => {
  console.log('rendering Navigation');

  return (
    <>
      <nav className={styles.navigation}>
        <Link to="/" className={styles.navLink}>
          Home
        </Link>
        <Link to="shop" className={styles.navLink}>
          Shop
        </Link>
        <Link to="cart" className={styles.navLink}>
          Cart ({cartCount})
        </Link>
      </nav>
    </>
  );
};

Navigation.propTypes = {
  cartCount: PropTypes.number,
};

export default Navigation;
