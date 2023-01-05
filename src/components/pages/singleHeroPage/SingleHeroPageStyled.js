import styled from "styled-components";

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 800px;
  margin-top: 50px;
`;

export const HeroImg = styled.img`
  height: 300px;
  width: 300px;
  display: block;
`;

export const HeroName = styled.h2`
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 25px;

  color: #000000;
`;

export const HeroDescription = styled.p`
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #000000;

  margin-bottom: 150px;
`;

export const LinkToMainPage = styled.a`
  justify-self: end;
  font-weight: bold;
  font-size: 30px;
  line-height: 24px;
  text-align: center;

  color: #9f0013; ;
`;
