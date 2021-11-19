import styled from "styled-components";
import { ContainerGamesHistoryProps } from "./types";

export const ContainerGamesHistory = styled.div<ContainerGamesHistoryProps>`
  padding: 20px 50px;
  flex-direction: column;
  display: flex;
  flex-direction: row;
  color: #868686;
  @media (max-width: 768px) {
    display: ${(props) => (props.isToggle ? "none" : "flex")};
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;

export const EmptyGameArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

export const EmptyGameImg = styled.img`
  height: 150px;
  width: 150px;
  @media (max-width: 768px) {
    height: 100px;
    width: 100px;
  }
`;

export const EmptyGameText = styled.p`
  font-size: 17px;
  font-weight: bold;
  color: #808080;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
