import Navigation from './components/navigation/Navigation';
import './App.css';
import { Outlet } from 'react-router-dom';
import useProducts from './api/products';
import { hello, bye } from './api/products';

function App() {
  // const { products, setProducts, error, loading } = useProducts();

  useProducts();
  hello();
  bye();

  const updateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) => {
      if (product.id === updatedProduct.id) {
        return updatedProduct;
      } else {
        return product;
      }
    });

    setProducts(updatedProducts);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <Navigation
        cartCount={products.reduce(
          (total, product) => total + product.quantity,
          0
        )}
      />
      <Outlet
        context={{
          products,
          updateProduct,
        }}
      />
    </>
  );
}

export default App;
