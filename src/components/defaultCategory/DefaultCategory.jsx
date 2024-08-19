import { Link } from 'react-router-dom';

const DefaultCategory = () => {
  console.log('rendering DefaultCategory');

  return (
    <>
      <h1>No such Category for the Shop!</h1>
      <Link to="/">Click here to go back</Link>
    </>
  );
};

export default DefaultCategory;
