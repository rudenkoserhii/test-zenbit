import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
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
} from "./LoginForm.styled";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
        <Title>Login</Title>
        <LabelStyled>
          Email
          <InputStyled placeholder="Email" type="email" name="email" />
        </LabelStyled>
        <LabelStyled>
          Password
          <InputStyled placeholder="Password" type="password" name="password" />
        </LabelStyled>
        <Forgot href="/auth/forgot">Forgot password?</Forgot>
        <ButtonStyled type="submit">Sign In</ButtonStyled>
        <Text>
          <Span>Don’t have account?</Span>
          <Link to="/auth/signup">Sign Up</Link>
        </Text>
      </FormStyled>
    </Wrapper>
  );
};
