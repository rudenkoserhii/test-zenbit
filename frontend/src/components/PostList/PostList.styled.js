import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 360px;
  margin: 0px auto;
  padding: 0px 40px 10px 40px;

  @media screen and (min-width: 768px) {
    max-width: 768px;

    padding: 0px 60px 20px 60px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;

    padding: 0px 80px 12px 80px;
  }
`;

export const PostListStyled = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 30px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const Li = styled.li``;

export const Title = styled.h2`
  color: ${(p) => p.theme.colors.brown};

  text-align: center;
  line-height: 1.214;
  letter-spacing: 1;
  font-family: "Merriweather", serif;
  font-size: ${(p) => p.theme.fontSizes.ml};
  font-weight: ${(p) => p.theme.fontWeights.bold};

  margin-top: 3%;
  margin-bottom: 10px;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.l};
    margin-top: 40px;
    margin-bottom: 15px;
  }

  @media screen and (min-width: 1440px) {
    text-align: left;

    font-size: ${(p) => p.theme.fontSizes.xl};
    margin-top: 50px;
    margin-bottom: 20px;
  }
`;
