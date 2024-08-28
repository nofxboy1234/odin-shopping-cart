import Product from '../product/Product';
import { useOutletContext } from 'react-router-dom';
import styles from './Shop.module.css';

const Shop = () => {
  const { products } = useOutletContext();

  return (
    <>
      <h1 className={styles.heading}>Shop</h1>
      <div className={styles.shopContainer}>
        <div className={styles.shop}>
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Shop;
