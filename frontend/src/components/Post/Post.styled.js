import styled from "styled-components";

export const PostStyled = styled.a`
  display: block;

  height: 70px;
  width: 315px;
  border-radius: 5px;

  padding: 120px 22.5px 10px 22.5px;

  background-image: url(${(props) => props.$picture});
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;

  color: white;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);

  @media screen and (min-width: 768px) {
    padding: 300px 14px 20px 14px;

    height: 80px;
    width: 620px;
  }

  @media screen and (min-width: 1440px) {
    padding: 300px 14px 20px 14px;

    height: 80px;
    width: calc((1440px - 20px - 160px) / 2 - 28px);
  }

  &:hover {
    -webkit-animation: vibrate-1 0.3s linear infinite both;
    animation: vibrate-1 0.3s linear infinite both;
  }
`;

export const NameStyled = styled.p`
  line-height: 1.7;
  letter-spacing: 1;
  font-family: "Merriweather", serif;
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.bold};

  color: ${(p) => p.theme.colors.white};

  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.ml};
  }
`;

export const DataStyled = styled.li`
  display: block;

  width: calc((100% - 30px * 2) / 3);
  height: 8px;

  line-height: 1.222;
  letter-spacing: 1;
  font-family: "Lato", sans-serif;
  font-size: ${(p) => p.theme.fontSizes.xxs};
  font-weight: ${(p) => p.theme.fontWeights.bold};

  color: ${(p) => p.theme.colors.white};

  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.m};

    width: calc((100% - 60px * 2) / 3);
    height: 17px;
  }

  &:not(:nth-child(3n)) {
    margin-right: 30px;

    @media screen and (min-width: 768px) {
      margin-right: 60px;
    }
  }

  &:nth-last-child(-n + 2) {
    margin-bottom: 0;
  }
`;

export const DataBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  height: 22px;
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 44px;
  }
`;
