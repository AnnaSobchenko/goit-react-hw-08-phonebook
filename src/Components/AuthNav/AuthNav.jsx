import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <NavLink to="/register">&#11162; Register</NavLink>
      <NavLink to="/login">&#11162; LogIn</NavLink>
    </>
  );
};

export default AuthNav;
