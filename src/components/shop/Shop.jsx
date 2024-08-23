import Product from '../product/Product';
import { useOutletContext, useParams } from 'react-router-dom';
import styles from './Shop.module.css';

const Shop = () => {
  const { category } = useParams();
  const { products } = useOutletContext();

  return (
    <>
      {/* <div>
        <Link to="/shop/food">Food</Link>
      </div>
      <div>
        <Link to="/shop/drinks">Drinks</Link>
      </div> */}
      {/* {category === 'food' && <Food />}
      {category === 'drinks' && <Drinks />} */}
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
