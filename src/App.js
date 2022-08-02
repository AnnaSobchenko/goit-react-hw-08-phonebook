import './App.scss';
import ContactList from './Components/ContactList/ContactList.jsx';
import Filter from './Components/Filter/Filter.jsx';
import Form from './Components/Form/Form.jsx';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIsLoggedIn, getUserName } from 'redux/auth/authSelectors';
import RegisterPage from 'pages/RegisterPage';
import UserMenu from 'Components/UserMenu/UserMenu';
import { Switch } from 'react-router-dom';
import PrivateRoute from 'Components/PrivateRoute/PrivateRoute';
import PublicRoute from 'Components/PublicRoute/PublicRoute';
import LoginPage from 'pages/LoginPage';
import { getContacts } from 'redux/contacts/contactsOperations';
const { Rings } = require('react-loader-spinner');

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getUserName);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="AppHeader">
        <UserMenu isLoggedIn={isLoggedIn} userName={userName} />
      </header>
      <main className="main">
        <Switch>
          <PublicRoute path="/register" isRestricted>
            <RegisterPage />
          </PublicRoute>
          <PublicRoute path="/login" isRestricted>
            <LoginPage />
          </PublicRoute>
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
