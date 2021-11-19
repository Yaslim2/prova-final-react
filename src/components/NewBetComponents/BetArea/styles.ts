import styled from "styled-components";
import { AreaGamesProps } from "./types";

export const AreaGames = styled.div<AreaGamesProps>`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: ${(props) => (props.isToggle ? "none" : "flex")};
    flex-direction: column;
  }
`;

export const BetContainer = styled.div`
  display: flex;
  padding: 20px 50px;
  width: 65%;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 50px;
  }
`;
