import Navigation from './components/navigation/Navigation';
import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import useProducts from './api/products';

function App() {
  const [cart, setCart] = useState([]);
  const { products, error, loading } = useProducts();

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

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
