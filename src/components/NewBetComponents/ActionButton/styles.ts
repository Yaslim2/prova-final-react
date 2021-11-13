import styled from "styled-components";

type ActionButtonProps = {
  isAddToCart: boolean | undefined;
};

export const ActionButtonContainer = styled.button<ActionButtonProps>`
  display: flex;
  cursor: pointer;
  justify-content: ${(props) =>
    props.isAddToCart ? "space-around" : "center"};
  align-items: center;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  width: ${(props) => (props.isAddToCart ? "209px" : "164px")};
  height: 52px;
  border-radius: 10px;
  border: 1px solid #27c383;
  background-color: ${(props) => (props.isAddToCart ? "#27c383" : "#fff")};
  color: ${(props) => (props.isAddToCart ? "#fff" : "#27c383")};
`;

export const ShoppingCartImage = styled.img`
  height: 25px;
`;
