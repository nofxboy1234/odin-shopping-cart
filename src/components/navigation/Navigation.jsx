import styles from './Navigation.module.css';
import PropTypes from 'prop-types';

const Navigation = ({ setContentIndex }) => {
  return (
    <>
      <nav className={styles.navigation}>
        <div className="nav-link" onClick={() => setContentIndex(0)}>
          Home
        </div>
        <div className="nav-link" onClick={() => setContentIndex(1)}>
          Shop
        </div>
        <div className="nav-link" onClick={() => setContentIndex(2)}>
          Cart
        </div>
      </nav>
    </>
  );
};

Navigation.propTypes = {
  setContentIndex: PropTypes.func.isRequired,
};

export default Navigation;
