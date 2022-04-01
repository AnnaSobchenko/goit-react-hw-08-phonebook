import { loginFormOptions } from 'assets/options/loginFormOptions';
import AuthForm from 'Components/AuthForm/AuthForm';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/authOperations';
 
const initialForm = {
    email: '',
    password: '',
  };
  
const LoginPage = () => {
 
 
  const dispatch = useDispatch();

  const cbOnSubmit = ({ name, email, password }) =>
    dispatch(operations.logIn({ name, email, password }));

  return (
    <>
      <h2>LogIn</h2>
      <AuthForm
        options={loginFormOptions}
        cbOnSubmit={cbOnSubmit}
        initialFormValue={initialForm}
      />
    </>
  );
};

export default LoginPage;
