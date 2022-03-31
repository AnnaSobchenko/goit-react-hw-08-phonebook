import { Button } from 'bootstrap';
import AuthNav from 'Components/AuthNav/AuthNav';
import { NavLink } from 'react-router-dom';

const UserMenu = ({ isLoggedIn }) => {
  return (
    <>      
        <NavLink to="/menu">Phonebook</NavLink>
        {isLoggedIn ? <p>&#128125; Welcome!</p> : <AuthNav />}
      
      {isLoggedIn && (
        <Button
          variant="outline-dark"
          className="mx-auto d-block"
          as="input"
          type="button"
          value="LogOut"
        />
      )}
    </>
  );
};

export default UserMenu;
