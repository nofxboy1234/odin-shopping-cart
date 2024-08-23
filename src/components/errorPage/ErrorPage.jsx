import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <h1>Sorry, this route does not exist!</h1>
      <div>{error.statusText}</div>
      <div>{error.data}</div>
      <Link to="/">Click here to go back to the home page</Link>
    </>
  );
};

export default ErrorPage;
