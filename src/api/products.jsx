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
        console.log('setting products');
        setProducts(json);
        setError(null);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('Aborted fetching of Products');
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

  return { products, error, loading };
};

export default useProducts;
