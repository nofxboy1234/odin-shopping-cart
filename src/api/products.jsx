import { useEffect, useState } from 'react';
import getRequestWithNativeFetch from './getRequestWithNativeFetch';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    // getRequestWithNativeFetch('https://sidfjhsdjkfhjdshfjsdhfjd')
    getRequestWithNativeFetch(
      'https://fakestoreapi.com/products',
      controller.signal
    )
      .then((json) => {
        setProducts(
          json.map((product) => ({
            ...product,
            quantity: product.quantity || 0,
          }))
        );
        setError(null);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          return;
        }

        const fakeProducts = [
          {
            id: 1,
            image: '',
            title: 'a product',
            price: 10.99,
            quantity: 0,
          },
          {
            id: 2,
            image: '',
            title: 'a product 2',
            price: 20.0,
            quantity: 0,
          },
          {
            id: 3,
            image: '',
            title: 'a product 3',
            price: 30.0,
            quantity: 0,
          },
          {
            id: 4,
            image: '',
            title: 'a product 4',
            price: 40.0,
            quantity: 0,
          },
        ];

        setProducts(fakeProducts);
        setError(null);
        // setProducts([]);
        // setError(error);
      })
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, []);

  return { products, setProducts, error, loading };
};

export default useProducts;
