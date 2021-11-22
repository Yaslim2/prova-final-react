import styled from "styled-components";
import { ActionButtonContainerProps } from "./types";
import { Roboto, greenBet } from "src/shared/themes";

export const ActionButtonContainer = styled.button<ActionButtonContainerProps>`
  display: flex;
  cursor: pointer;
  justify-content: ${(props) =>
    props.isAddToCart ? "space-around" : "center"};
  align-items: center;
  font-size: 16px;
  font-family: ${Roboto};
  font-weight: bold;
  width: ${(props) => (props.isAddToCart ? "209px" : "164px")};
  height: 52px;
  border-radius: 10px;
  border: 1px solid ${greenBet};
  background-color: ${(props) => (props.isAddToCart ? greenBet : "#fff")};
  color: ${(props) => (props.isAddToCart ? "#fff" : greenBet)};
  @media (max-width: 768px) {
    height: 52px;
    width: ${(props) => (props.isAddToCart ? "180px" : "140px")};
    font-size: 15px;
  }
`;

export const ShoppingCartImage = styled.img`
  height: 25px;
  @media (max-width: 768px) {
    height: 20px;
  }
`;
