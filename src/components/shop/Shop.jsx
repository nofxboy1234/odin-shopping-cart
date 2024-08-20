import Product from '../product/Product';
import { useOutletContext, useParams } from 'react-router-dom';

const Shop = () => {
  const { category } = useParams();
  const { products } = useOutletContext();

  console.log('rendering Shop');
  console.log(`category: ${category}`);

  return (
    <>
      <h1>Shop</h1>
      {/* <div>
        <Link to="/shop/food">Food</Link>
      </div>
      <div>
        <Link to="/shop/drinks">Drinks</Link>
      </div> */}
      {/* {category === 'food' && <Food />}
      {category === 'drinks' && <Drinks />} */}

      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </>
  );
};

export default Shop;
