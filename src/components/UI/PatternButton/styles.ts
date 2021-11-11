import styled from "styled-components";

type PatternButtonProps = {
  bgColor: string | undefined;
  txColor: string | undefined;
  gameButton: boolean | undefined;
};

export const Button = styled.button<PatternButtonProps>`
  cursor: ${(props) => (props.gameButton ? "pointer" : "")};
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};
  border: ${(props) => (props.txColor ? `2px solid ${props.txColor}` : "none")};
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
  color: ${(props) => (props.txColor ? props.txColor : "#fff")};
  margin: 15px 0px;
`;
