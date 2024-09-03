import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <h1>Sorry, this route does not exist!</h1>
      <div data-testid="errorStatusText">{error.statusText}</div>
      <div data-testid="errorData">{error.data}</div>
      <Link to="/">Click here to go back to the home page</Link>
    </>
  );
};

export default ErrorPage;
