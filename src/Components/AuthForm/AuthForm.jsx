import { useEffect } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { changeInput, setInitialState } from 'redux/auth/authSlice';
import { FormStyled } from './AuthForm.styled';

const AuthForm = ({ options, cbOnSubmit, initialFormValue }) => {
  const dispatch = useDispatch();

  const form = useSelector(getIsLoggedIn);

  const handleSubmit = e => {
    e.preventDefault();
    cbOnSubmit(form);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch(changeInput({ name, value }));
  };

  useEffect(() => {
    dispatch(setInitialState(initialFormValue));
  });

  return (
    <FormStyled onSubmit={handleSubmit}>
      {options.map(({ title, name, type, placeholder }) => (
        <InputGroup key={name} className="mb-3">
          {title && <InputGroup.Text className="text-white bg-dark">{title}</InputGroup.Text>}
          <FormControl
            // name={name}
            type={type}
            value={name}
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
