import styled from "styled-components";

interface ColorProps {
  mainColor: string;
}

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
`;
export const BeforeGamesDetail = styled.div<ColorProps>`
  content: "";
  width: 7px;
  height: 94px;
  border-radius: 6px;
  background-color: ${(props) => props.mainColor};
`;

export const DetailsArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  gap: 12px;
`;

export const NumbersSelectedText = styled.p`
  font-size: 17px;
  font-weight: bold;
`;

export const GameDateText = styled.p`
  font-size: 14px;
  font-style: normal;
`;

export const TypeGameText = styled.p<ColorProps>`
  font-size: 17px;
  font-weight: bold;
  color: ${(props) => props.mainColor};
`;
