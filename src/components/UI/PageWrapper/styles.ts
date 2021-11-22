import styled from "styled-components";
import { MainProps } from "./types";
import { lightGray } from "src/shared/themes";

export const Main = styled.main<MainProps>`
  display: ${(props) => (props.isCentered ? "flex" : "block")};
  justify-content: space-around;
  align-items: center;
  height: ${(props) => (props.isCentered ? "100vh" : "100%")};
  color: ${lightGray};
  letter-spacing: 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100vw;
  }
`;
