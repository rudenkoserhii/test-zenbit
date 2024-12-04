import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100vw;
  height: fit-content;

  background-color: ${(p) => p.theme.colors.darkgrey};
`;

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  height: 164px;
  max-width: 360px;
  padding: 18px 80px;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;

    height: 114px;
    max-width: 768px;
    padding: 18px 80px;
  }

  @media screen and (min-width: 1440px) {
    height: 44px;
    max-width: 1440px;
    padding: 18px 80px;
  }
`;

export const Link = styled(NavLink)`
  height: 100%;
  width: auto;
`;

export const Logo = styled.img`
  height: 50px;
  width: auto;
  object-fit: contain;

  @media screen and (min-width: 768px) {
    height: 114px;
  }

  @media screen and (min-width: 1440px) {
    height: 44px;
  }
`;
