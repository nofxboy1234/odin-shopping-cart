import { useEffect, useState } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
      .catch((error) => setError(error))
      .finally(() => setLoading(false));

    return () => {
      ignore = true;
    };
  }, []);

  return { products, error, loading };
};

export default useProducts;
