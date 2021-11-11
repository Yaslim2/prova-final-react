import styled from "styled-components";

type MainProps = {
  isCentered: boolean | undefined;
};

export const Main = styled.main<MainProps>`
  display: ${(props) => (props.isCentered ? "flex" : "block")};
  justify-content: space-around;
  align-items: center;
  height: ${(props) => (props.isCentered ? "100vh" : "100%")};
  color: #707070;
  letter-spacing: 0;
`;
