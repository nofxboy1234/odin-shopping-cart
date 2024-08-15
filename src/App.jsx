import Navigation from './components/navigation/Navigation';
import Content from './components/content/Content';
import { useState } from 'react';
import './App.css';

const tempProducts = [
  {
    id: 1,
    imageUrl: '/products/1',
    title: 'product 1',
  },
  {
    id: 2,
    imageUrl: '/products/2',
    title: 'product 2',
  },
  {
    id: 3,
    imageUrl: '/products/3',
    title: 'product 3',
  },
];

function App() {
  const [contentIndex, setContentIndex] = useState(0);
  const [products, setProducts] = useState(tempProducts);
  const [cart, setCart] = useState([]);

  const findProduct = (id) => products.find((product) => product.id === id);

  return (
    <>
      <Navigation setContentIndex={setContentIndex} cartCount={cart.length} />
      <Content
        contentIndex={contentIndex}
        cart={cart}
        setCart={setCart}
        products={products}
        findProduct={findProduct}
      />
    </>
  );
}

export default App;
