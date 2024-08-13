import { useState } from 'react';

const Product = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState(0);

  return (
    <>
      <div>Product</div>
    </>
  );
};

export default Product;
