import { Button, FormControl, InputGroup } from "react-bootstrap";
import { FormStyled } from "./AuthForm.styled";

const AuthForm = ({options, cbOnSubmit}) => {
    return (
        <FormStyled onSubmit={null} >
            {options.map(({ title, name, type, placeholder }) => (
        <InputGroup key={name} className="mb-3">
          {title && <InputGroup.Text>{title}</InputGroup.Text>}
          <FormControl
            name={name}
            type={type}
            value={name}
            placeholder={placeholder}
            onChange={ null}           
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
}
 
export default AuthForm;