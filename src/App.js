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
const { Rings } = require('react-loader-spinner');

const App = () => {
  const dispatch = useDispatch();
  const isLoading=useSelector(state=>state.contacts.isLoading)

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="AppHeader">
        <h2>Phonebook</h2>
      </header>
      <main className="main">
        <AuthForm options={loginFormOptions} cbOnSubmit={null} />
        <Form />
        <Filter />
        <ul className="list">
         { isLoading &&<Rings heigth="34" width="100%" color="#fff" ariaLabel='loading' />}
          <ContactList />
        </ul>
      </main>
    </div>
  );
};

App.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array,
};

export default App;
