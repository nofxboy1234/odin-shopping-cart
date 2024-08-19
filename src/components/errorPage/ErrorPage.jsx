import { Link } from 'react-router-dom';

const ErrorPage = () => {
  console.log('rendering ErrorPage');

  return (
    <>
      <h1>Sorry, this route does not exist!</h1>
      <Link to="/">Click here to go back to the home page</Link>
    </>
  );
};

export default ErrorPage;
