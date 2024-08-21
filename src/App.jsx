import Navigation from './components/navigation/Navigation';
import { useEffect, useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    let ignore = false;
    setProducts([]);

    console.log('fetching data');
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (res.status >= 400) {
          throw new Error('server error');
        }
        return res.json();
      })
      .then((json) => {
        if (!ignore) {
          console.log('setting products');
          setProducts(json);
        }
      })
      .catch((error) => setError(error));

    return () => {
      ignore = true;
    };
  }, []);

  console.log('rendering App');

  if (error) return <p>A network error was encountered</p>;

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
