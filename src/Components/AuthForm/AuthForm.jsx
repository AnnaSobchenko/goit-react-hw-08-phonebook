import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getFormValue } from 'redux/auth/authSelectors';
import { changeInput } from 'redux/auth/authSlice';
import { FormStyled } from './AuthForm.styled';

const AuthForm = ({ options, cbOnSubmit, initialFormValue }) => {
  const dispatch = useDispatch();

  const authForm = useSelector(getFormValue);

  const handleSubmit = e => {
    e.preventDefault();
    cbOnSubmit(authForm);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch(changeInput({ name, value }));
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      {options.map(({ title, name, type, placeholder }) => (
        <InputGroup key={name} className="mb-3">
          {title && <InputGroup.Text>{title}</InputGroup.Text>}
          <FormControl
            name={name}
            type={type}
            value={authForm[name]}
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
