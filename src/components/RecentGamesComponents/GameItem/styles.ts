import styled from "styled-components";

import { ColorProps } from "./types";

export const GameItemArea = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 15px;
`;
export const DetailGameItemArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 13px;
  @media (max-width: 768px) {
    gap: 10px;
  }
`;
export const BeforeGamesDetail = styled.div<ColorProps>`
  content: "";
  width: 7px;
  height: 94px;
  border-radius: 6px;
  background-color: ${(props) => props.mainColor};
  @media (max-width: 768px) {
    height: 113px;
  }
`;

export const NumbersSelectedText = styled.p`
  font-size: 17px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const GameDateText = styled.p`
  font-size: 14px;
  font-style: normal;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const TypeGameText = styled.p<ColorProps>`
  font-size: 17px;
  font-weight: bold;
  color: ${(props) => props.mainColor};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
