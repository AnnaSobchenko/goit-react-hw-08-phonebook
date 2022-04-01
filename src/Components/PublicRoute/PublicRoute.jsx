import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

const PublicRoute = ({ children, path, isRestricted }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn && isRestricted ? (
    <Redirect to="/" />
  ) : (
    <Route path={path}>{children}</Route>
  );
};

export default PublicRoute;
