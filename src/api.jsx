import { useEffect, useState } from 'react';
import getRequestWithNativeFetch from './getRequestWithNativeFetch';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    setLoading(true);

    console.log('fetching data');
    // fetch('https://fakestoreapi.com/products').then((res) => {
    //   if (!res.ok) {
    //     throw new Error('server error');
    //   }
    //   return res.json();
    // });
    getRequestWithNativeFetch('https://fakestoreapi.com/products')
      .then((json) => {
        if (!ignore) {
          console.log('setting products');
          setProducts(json);
          setError(null);
        }
      })
      .catch((error) => {
        setProducts([]);
        setError(error);
      })
      .finally(() => setLoading(false));

    return () => {
      ignore = true;
    };
  }, []);

  return { products, error, loading };
};

export default useProducts;
