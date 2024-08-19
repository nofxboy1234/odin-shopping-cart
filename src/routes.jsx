import App from './App';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import Food from './components/food/Food';
import Drinks from './components/drinks/Drinks';
import Cart from './components/cart/Cart';
import ErrorPage from './components/errorPage/ErrorPage';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'shop',
        element: <Shop />,
        children: [
          {
            path: 'food',
            element: <Food />,
          },
          {
            path: 'drinks',
            element: <Drinks />,
          },
        ],
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];

export default routes;
