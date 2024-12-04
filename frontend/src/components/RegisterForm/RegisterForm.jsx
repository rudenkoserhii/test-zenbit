import { useDispatch } from "react-redux";
import { signUp } from "../../redux/auth/operations";
import {
  FormStyled,
  LabelStyled,
  InputStyled,
  ButtonStyled,
  Wrapper,
  Background,
  Title,
  Forgot,
  Text,
  Span,
  Link,
} from "../LoginForm/LoginForm.styled";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      signUp({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Wrapper>
      <Background className="slide-in-left" />
      <FormStyled
        className="slide-in-blurred-right"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Title>SignUp</Title>
        <LabelStyled>
          Email
          <InputStyled placeholder="Email" type="email" name="email" />
        </LabelStyled>
        <LabelStyled>
          Password
          <InputStyled placeholder="Password" type="password" name="password" />
        </LabelStyled>
        <Forgot style={{ opacity: "0", pointerEvents: "none" }}>
          Forgot password?
        </Forgot>
        <ButtonStyled type="submit">Sign Up</ButtonStyled>
        <Text>
          <Span>Have an account?</Span>
          <Link to="/auth/login">Log In</Link>
        </Text>
      </FormStyled>
    </Wrapper>
  );
};
