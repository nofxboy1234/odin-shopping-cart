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
        setProducts(json.map((product) => ({ ...product, quantity: 0 })));
        setError(null);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          return;
        }

        setProducts([]);
        setError(error);
      })
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, []);

  return { products, setProducts, error, loading };
};

export default useProducts;
