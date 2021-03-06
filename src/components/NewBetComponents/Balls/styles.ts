import styled from "styled-components";
import { ballColor } from "src/shared/themes";
import { BallProps } from "./types";

export const BallStyle = styled.div<BallProps>`
  font-style: normal;
  cursor: pointer;
  font-weight: bold;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isSelected ? props.bgColor : ballColor};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
