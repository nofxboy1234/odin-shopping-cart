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

  const getProductById = (itemId) =>
    products.find((product) => product.id === itemId);

  const addItemToCart = (newItem) => {
    setCart([...cart, newItem]);
  };

  const updateItemInCart = (editedItem) => {
    const updatedItems = cart.map((item) => {
      if (editedItem.id === item.id) {
        return editedItem;
      } else {
        return item;
      }
    });

    setCart(updatedItems);
  };

  return (
    <>
      <Navigation
        setContentIndex={setContentIndex}
        cartCount={cart.reduce(
          (total, cartItem) => total + cartItem.quantity,
          0
        )}
      />
      <Content
        contentIndex={contentIndex}
        cart={cart}
        products={products}
        addItemToCart={addItemToCart}
        updateItemInCart={updateItemInCart}
        getProductById={getProductById}
      />
    </>
  );
}

export default App;
