import styled from "styled-components";
import { PatternButtonStyleProps } from "./types";

export const Button = styled.button<PatternButtonStyleProps>`
  cursor: ${(props) => (props.gameButton ? "pointer" : "")};
  background-color: ${(props) => (props.isActive ? props.activeColor : "#fff")};
  border: ${(props) =>
    !props.isActive ? `2px solid ${props.activeColor}` : "none"};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.gameButton ? "113px" : "143px")};
  height: ${(props) => (props.gameButton ? "34px" : "39px")};
  font-family: "Roboto", sans-serif;
  font-style: italic;
  font-size: ${(props) => (props.gameButton ? "14px" : "20px")};
  text-align: center;
  font-weight: bold;
  border-radius: 100px;
  color: ${(props) => (props.isActive ? "#Fff" : props.activeColor)};
  margin: 15px 0px;
  @media (max-width: 768px) {
    width: ${(props) => (props.gameButton ? "90px" : "90px")};
    height: ${(props) => (props.gameButton ? "30px" : "20px")};
    font-size: ${(props) => (props.gameButton ? "13px" : "16px")};
    margin: 0;
  }
`;
