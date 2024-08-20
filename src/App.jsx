import Navigation from './components/navigation/Navigation';
import Content from './components/content/Content';
import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';

const tempProducts = [
  {
    id: 1,
    imageUrl: '/products/1',
    title: 'product 1',
    price: 10.0,
  },
  {
    id: 2,
    imageUrl: '/products/2',
    title: 'product 2',
    price: 20.5,
  },
  {
    id: 3,
    imageUrl: '/products/3',
    title: 'product 3',
    price: 139.99,
  },
];

function App() {
  const [products, setProducts] = useState(tempProducts);
  const [cart, setCart] = useState([]);

  const getProductById = (itemId) =>
    products.find((product) => product.id === itemId);

  const getItemInCartById = (productId) =>
    cart.find((item) => item.id === productId);

  const addItemToCart = (newItem) => {
    const cartItem = getItemInCartById(newItem.id);
    if (cartItem) {
      newItem.quantity += cartItem.quantity;
      updateItemInCart(newItem);
    } else {
      setCart([...cart, newItem]);
    }

    return newItem.quantity;
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

  const removeItemFromCart = (itemToRemoveId) => {
    const updatedItems = cart.filter((item) => item.id != itemToRemoveId);
    setCart(updatedItems);
  };

  console.log('rendering App');

  return (
    <>
      <Navigation
        cartCount={cart.reduce(
          (total, cartItem) => total + cartItem.quantity,
          0
        )}
      />
      <Outlet
        context={{
          cart,
          products,
          addItemToCart,
          updateItemInCart,
          getProductById,
          removeItemFromCart,
        }}
      />
    </>
  );
}

export default App;
