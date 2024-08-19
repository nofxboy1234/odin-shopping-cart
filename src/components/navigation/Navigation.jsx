import { useState } from 'react';
import styles from './Navigation.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Shop from '../shop/Shop';

const Navigation = ({ setContentIndex, cartCount }) => {
  return (
    <>
      <nav className={styles.navigation}>
        <div className="nav-link" onClick={() => setContentIndex(0)}>
          Home
        </div>
        <div className="nav-link">
          <Link to="shop">Shop</Link>
        </div>
        <div className="nav-link" onClick={() => setContentIndex(2)}>
          Cart ({cartCount})
        </div>
      </nav>
    </>
  );
};

Navigation.propTypes = {
  setContentIndex: PropTypes.func.isRequired,
};

export default Navigation;
