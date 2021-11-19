import styled from "styled-components";
import { MainButtonContainerProps } from "./types";

export const MainButtonContainer = styled.button<MainButtonContainerProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.isForm ? "#b5c401" : "#27C383")};
  border: none;
  background: none;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-style: italic;
  padding: ${(props) => (props.isForm ? "35px" : 0)};
  width: ${(props) => (props.isForm ? "100%" : "auto")};
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
    padding: 25px;
  }
`;

export const MainButtonText = styled.h1`
  font-size: 35px;
  margin-right: 10px;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export const MainButtonArrow = styled.img`
  height: 30px;
  @media (max-width: 768px) {
    heigh: 24px;
  }
`;
