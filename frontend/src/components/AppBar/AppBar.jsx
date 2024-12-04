import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { useAuth } from "../../hooks/useAuth";
import { HeaderStyled, Logo, Wrapper, Link } from "./AppBar.styled";
import logo from "../../assets/images/logo.png";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Wrapper>
      <HeaderStyled>
        <Link to="/">
          <Logo src={logo} alt={"logo"} />
        </Link>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </HeaderStyled>
    </Wrapper>
  );
};
