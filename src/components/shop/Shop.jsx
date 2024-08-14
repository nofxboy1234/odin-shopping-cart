import Product from '../product/Product';
import PropTypes from 'prop-types';

const tempProducts = [
  {
    imageUrl: '/products/1',
    quantity: 1,
    title: 'product 1',
  },
  {
    imageUrl: '/products/2',
    quantity: 2,
    title: 'product 2',
  },
  {
    imageUrl: '/products/3',
    quantity: 3,
    title: 'product 3',
  },
];

const Shop = ({ products = tempProducts }) => {
  return (
    <>
      <h1>Shop</h1>
      {products.map((product) => {
        return (
          <Product
            key={product.title}
            imageUrl={product.imageUrl}
            quantity={product.quantity}
            title={product.title}
          />
        );
      })}
    </>
  );
};

Shop.propTypes = {
  products: PropTypes.array,
};

export default Shop;
