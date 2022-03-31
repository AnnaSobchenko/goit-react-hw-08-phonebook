import './App.scss';
import ContactList from './Components/ContactList/ContactList.jsx';
import Filter from './Components/Filter/Filter.jsx';
import Form from './Components/Form/Form.jsx';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/contacts/contactsOperations';
import AuthForm from 'Components/AuthForm/AuthForm';
import { loginFormOptions } from 'assets/options/loginFormOptions';
import { registerFormOptions } from 'assets/options/registerFormOptions';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import RegisterPage from 'pages/RegisterPage';
import UserMenu from 'Components/UserMenu/UserMenu';
import { Switch } from 'react-router-dom';
import PrivateRoute from 'Components/PrivateRoute/PrivateRoute';
const { Rings } = require('react-loader-spinner');

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="AppHeader">
        <UserMenu isLoggedIn={isLoggedIn} />
        {/* <h2>Phonebook</h2> */}
      </header>
      <main className="main">
        <Switch>
          {!isLoggedIn && (
            <RegisterPage options={loginFormOptions} cbOnSubmit={null} />
          )}
          {/* {!isLoggedIn && (
            <AuthForm options={registerFormOptions} cbOnSubmit={null} />
          )} */}
          <PrivateRoute path="/">
            <>
              <Form />
              <Filter />
              <ul className="list">
                {isLoading && (
                  <Rings
                    heigth="34"
                    width="100%"
                    color="#fff"
                    ariaLabel="loading"
                  />
                )}
                <ContactList />
              </ul>
            </>
          </PrivateRoute>
        </Switch>
      </main>
    </div>
  );
};

App.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array,
};

export default App;
