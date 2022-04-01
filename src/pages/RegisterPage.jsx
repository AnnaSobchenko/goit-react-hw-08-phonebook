import { registerFormOptions } from 'assets/options/registerFormOptions';
import { useDispatch } from 'react-redux';
import AuthForm from '../Components/AuthForm/AuthForm';
import operations from '../redux/auth/authOperations'

const initialForm = {
  name: '',
  email: '',
  password: '',
};

const RegisterPage = () => {
  const dispatch = useDispatch();

  const cbOnSubmit = (dataForm) =>
    dispatch(operations.register(dataForm));

  return (
      <>
      <h2>registration form</h2>
    <AuthForm
      options={registerFormOptions}
      cbOnSubmit={cbOnSubmit}
      initialFormValue={initialForm}
      />
      </>
  );
};

export default RegisterPage;
