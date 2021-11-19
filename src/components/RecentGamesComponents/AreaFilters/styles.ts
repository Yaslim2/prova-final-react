import styled from "styled-components";
import { AreaFilterContainerProps } from "./types";
export const AreaFilterContainer = styled.div<AreaFilterContainerProps>`
  display: flex;
  align-items: center;
  padding: 20px 50px;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 768px) {
    display: ${(props) => (props.isToggle ? "none" : "flex")};
    padding: 8px 50px;
    flex-direction: column;
    border-bottom: 2px solid #ebebeb;
  }
`;

export const FilterButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const GameButtonsArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

export const RecentGamesText = styled.h1`
  font-size: 24px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const FilterText = styled.p`
  margin-left: 25px;
  text-align: center;
  color: #868686;
  @media (max-width: 768px) {
    margin: 0;
  }
`;
