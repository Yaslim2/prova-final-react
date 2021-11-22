import styled from "styled-components";
import { darkGray, Poppins } from "src/shared/themes";
export const BackButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${darkGray};
  border: none;
  background: none;
  font-family: ${Poppins};
  font-weight: bold;
  font-style: italic;
  width: 100%;
  text-align: center;
`;

export const BackButtonArrow = styled.img`
  height: 30px;
  @media (max-width: 768px) {
    heigh: 24px;
  }
`;

export const BackButtonText = styled.h1`
  font-size: 35px;
  margin-left: 10px;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
