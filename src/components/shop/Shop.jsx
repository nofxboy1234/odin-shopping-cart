import Product from '../product/Product';
import { useOutletContext, useParams } from 'react-router-dom';
import styles from './Shop.module.css';

const Shop = () => {
  const { category } = useParams();
  const { products } = useOutletContext();

  console.log('rendering Shop');
  console.log(`category: ${category}`);

  return (
    <>
      <h1 className={styles.heading}>Shop</h1>
      {/* <div>
        <Link to="/shop/food">Food</Link>
      </div>
      <div>
        <Link to="/shop/drinks">Drinks</Link>
      </div> */}
      {/* {category === 'food' && <Food />}
      {category === 'drinks' && <Drinks />} */}

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
