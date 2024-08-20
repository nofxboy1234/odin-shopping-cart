import { useState } from 'react';
import styles from './Navigation.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Shop from '../shop/Shop';

const Navigation = ({ cartCount }) => {
  console.log('rendering Navigation');

  return (
    <>
      <nav className={styles.navigation}>
        <div className="nav-link">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-link">
          <Link to="shop">Shop</Link>
        </div>
        <div className="nav-link">
          <Link to="cart">Cart ({cartCount})</Link>
        </div>
      </nav>
    </>
  );
};

Navigation.propTypes = {
  setContentIndex: PropTypes.func.isRequired,
};

export default Navigation;
