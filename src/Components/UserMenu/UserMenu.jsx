import Button from 'react-bootstrap/Button';
import AuthNav from 'Components/AuthNav/AuthNav';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/authOperations';

const UserMenu = ({ isLoggedIn, userName = 'Anonymous' }) => {
  const dispatch = useDispatch();

  return (
    <>
      <NavLink to="/menu">Phonebook</NavLink>
      {isLoggedIn ? <p>&#128125; Welcome, {userName}!</p> : <AuthNav />}

      {isLoggedIn && (
        <Button
          className="btn"
          variant="light"
          onClick={() => dispatch(operations.logOut())}
        >
          LogOut
        </Button>
      )}
    </>
  );
};

export default UserMenu;
