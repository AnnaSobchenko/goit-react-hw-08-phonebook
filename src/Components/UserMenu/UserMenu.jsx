import Button from 'react-bootstrap/Button'
import AuthNav from 'Components/AuthNav/AuthNav';
import { NavLink } from 'react-router-dom';

const UserMenu = ({ isLoggedIn, userName="Anymous" }) => {
  return (
    <>      
        <NavLink to="/menu">Phonebook</NavLink>
        {isLoggedIn ? <p>&#128125; Welcome, {userName}!</p> : <AuthNav />}
      
      {isLoggedIn && (
        <Button className='btn' variant="light" >LogOut</Button>
      )}
    </>
  );
};

export default UserMenu;
