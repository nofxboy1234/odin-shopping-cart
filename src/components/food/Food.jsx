import { Link } from 'react-router-dom';

const Food = () => {
  console.log('rendering Food');

  return (
    <>
      <h1>Food</h1>
      <Link to="/">Click here to go back</Link>
    </>
  );
};

export default Food;
