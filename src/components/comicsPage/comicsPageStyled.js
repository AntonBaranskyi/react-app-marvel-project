import styled from "styled-components";

export const WrapperComics = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 200px);
  column-gap: 92px;
`;

export const ComcisItemDiv = styled.div`
  width: 200px;
  height: 318px;
  margin-top: 50px;
  background-color: #000;
`;

export const ComicsItem = styled.li`
  width: 200px;
  height: 318px;
  background-color: $dark;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  padding: 15px;
  cursor: pointer;
  transition: 0.3s transform;
`;
export const ComicsImg = styled.img`
  max-width: 105%;
`;
export const TitleComics = styled.p`
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  margin-top: 35px;
  color: #000000;
`;
export const ComicsPrice = styled.p`
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  margin-top: 5px;
  color: rgba(0, 0, 0, 0.6);
`;
export const Button = styled.button`
  width: 170px;
  height: 38px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  transition: 0.3s transform;
  border: none;
  background-color: #9f0013;
  cursor: pointer;
  margin-top: 100px;
  margin-left: 450px;
`;
export const TextButton = styled.div`
  position: relative;
  background-color: $main-color;
  line-height: 18px;
  padding: 0 18px;
  transition: none;
`;
