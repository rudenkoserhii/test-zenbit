// import { useDispatch } from "react-redux";
// import { forgot } from "../../redux/auth/operations";
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
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useNavigate } from "react-router-dom";

export const ForgotForm = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    // dispatch(
    //   forgot({
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );
    Notify.success(
      `New password was send on the Mailbox ${form.elements.email.value}`,
      {
        width: "500px",
        position: "center-center",
        timeout: 3000,
        fontSize: "20px",
      }
    );
    form.reset();
    setTimeout(() => {
      navigate("/auth/login");
    }, 3000);
  };

  return (
    <Wrapper>
      <Background className="slide-in-left" />
      <FormStyled
        className="slide-in-blurred-right"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Title>Change password</Title>
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
        <ButtonStyled type="submit">Submit</ButtonStyled>
        <Text>
          <Span>Don’t have account?</Span>
          <Link to="/auth/signup">Sign Up</Link>
        </Text>
      </FormStyled>
    </Wrapper>
  );
};
