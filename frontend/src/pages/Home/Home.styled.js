import styled from "styled-components";
import hero_1x from "../../assets/images/background_hero_x1.png";
import hero_2x from "../../assets/images/background_hero_x2.png";
import hero_3x from "../../assets/images/background_hero_x3.png";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  background-image: image-set(
    url(${hero_1x}) 1x,
    url(${hero_2x}) 2x,
    url(${hero_3x}) 3x
  );
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;

  width: 100%;
  height: calc(100vh - 200px);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    height: calc(100vh - 150px);
  }

  @media screen and (min-width: 1440px) {
    height: calc(100vh - 80px);
  }
`;

export const Title = styled.h1`
  color: ${(p) => p.theme.colors.white};

  text-align: center;
  line-height: 1.25;
  letter-spacing: 1;
  font-family: "Merriweather", serif;
  font-size: ${(p) => p.theme.fontSizes.l};
  font-weight: ${(p) => p.theme.fontWeights.bold};

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xl};
  }

  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.xxl};
  }
`;

export const Paragraph = styled.p`
  color: ${(p) => p.theme.colors.white};

  margin: 0px 20px 30px 20px;

  text-align: center;
  line-height: 1.333;
  letter-spacing: -0.2%;
  font-family: "Lato", sans-serif;
  font-size: ${(p) => p.theme.fontSizes.m};
  font-weight: ${(p) => p.theme.fontWeights.normal};

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.ml};
    margin: 0px 100px 30px 100px;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.l};
    margin: 0px 300px 30px 300px;
  }
`;

export const Button = styled(NavLink)`
  all: unset;
  color: ${(p) => p.theme.colors.white};
  background-color: transparent;

  outline: 2px solid ${(p) => p.theme.colors.white};
  border-radius: 8px;

  height: 34px;
  width: 160px;
  padding: 10px 24px;

  text-align: center;
  text-decoration: none;
  line-height: 1.7;
  vertical-align: center;
  letter-spacing: 1;
  font-family: "Merriweather", serif;
  font-size: ${(p) => p.theme.fontSizes.m};
  font-weight: ${(p) => p.theme.fontWeights.bold};

  transition: all 200ms ease;

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.m};
  }

  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.ml};
  }

  &:hover {
    color: ${(p) => p.theme.colors.white};
    background-color: ${(p) => p.theme.colors.brown};
    outline: none;

    cursor: pointer;

    transition: all 200ms ease;
  }
`;
