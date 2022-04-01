// import { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getFormValue } from 'redux/auth/authSelectors';
import { changeInput, setInitialState } from 'redux/auth/authSlice';
import { FormStyled } from './AuthForm.styled';

// const initialForm = {
//   name: '',
//   email: '',
//   password: '',
// };

const AuthForm = ({ options, cbOnSubmit, initialFormValue }) => {
  // const [authForm, setAuthForm] = useState(initialForm);

  const dispatch = useDispatch();

  const auth = useSelector(getFormValue);

  const handleSubmit = e => {
    e.preventDefault();
    // cbOnSubmit(authForm);
    cbOnSubmit(auth);
  };

  const handleChange = e => {
    console.log(e.target);
    const { name, value } = e.target;
    // setAuthForm(prev => ({ ...prev, [name]: value }));
    // console.log(authForm);
    dispatch(changeInput({ name, value }));
  };

  // useEffect(() => {
  //   dispatch(setInitialState(initialFormValue));
  // }, []);

  console.log(auth);

  return (
    <FormStyled onSubmit={handleSubmit}>
      {options.map(({ title, name, type, placeholder }) => (
        <InputGroup key={name} className="mb-3">
          {title && <InputGroup.Text>{title}</InputGroup.Text>}
          <FormControl
            name={name}
            type={type}
            value={auth[name]}
            placeholder={placeholder}
            onChange={handleChange}
          />
        </InputGroup>
      ))}

      <Button
        variant="outline-dark"
        className="mx-auto d-block"
        as="input"
        type="submit"
        value="ok"
      />
    </FormStyled>
  );
};

export default AuthForm;
