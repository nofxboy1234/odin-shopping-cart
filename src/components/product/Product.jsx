import { useState } from 'react';

const Product = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('Product');
  const [quantity, setQuantity] = useState(0);

  return (
    <>
      <img src={image} alt={`image of ${title}`} />
      <div>{title}</div>
      <div>{quantity}</div>
    </>
  );
};

export default Product;
