import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 10px;
  }
`;

export const Text = styled.p`
  display: inline-block;

  height: 100%;
  width: fit-content;
  padding: 11px 20px;

  text-align: center;
  text-decoration: none;
  line-height: 1.375;
  letter-spacing: 1;
  font-family: "Merriweather", serif;
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.brown};

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xs};
  }

  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSizes.s};
  }
`;

export const Span = styled.span``;

export const ButtonStyled = styled.button`
  display: inline-block;

  height: 100%;
  width: 160px;
  padding: 11px 0px;
  outline: 2px solid ${(p) => p.theme.colors.brown};
  border-radius: 5px;

  text-align: center;
  text-decoration: none;
  line-height: 1.375;
  letter-spacing: 1;
  font-family: "Merriweather", serif;
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.brown};
  background-color: transparent;

  transition: all 200ms ease;

  @media screen and (min-width: 768px) {
    width: 140px;
    padding: 11px 0px;

    font-size: ${(p) => p.theme.fontSizes.xs};
  }

  @media screen and (min-width: 1440px) {
    height: 100%;
    width: 160px;
    padding: 11px 0px;

    font-size: ${(p) => p.theme.fontSizes.s};
  }

  &:hover {
    color: ${(p) => p.theme.colors.white};
    background-color: ${(p) => p.theme.colors.brown};
    outline: none;

    transition: all 200ms ease;
  }
`;
