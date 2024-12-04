import { NavLinkStyled, Wrapper } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <Wrapper>
      <NavLinkStyled to="/auth/login">Log In</NavLinkStyled>
      <NavLinkStyled to="/auth/signup">Sign Up</NavLinkStyled>
    </Wrapper>
  );
};
