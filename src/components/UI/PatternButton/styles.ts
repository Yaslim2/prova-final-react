import styled from "styled-components";

type Props = {
  bgColor: string | undefined;
  txColor: string | undefined;
};

export const Button = styled.button<Props>`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};
  border: ${(props) => (props.bgColor ? `2px solid ${props.bgColor}` : "none")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 144px;
  height: 39px;
  font-family: "Poppins", sans-serif;
  font-style: italic;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  border-radius: 100px;
  color: ${(props) => (props.txColor ? props.txColor : "#fff")};
  margin: 15px 0px;
`;
