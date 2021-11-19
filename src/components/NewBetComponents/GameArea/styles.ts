import styled from "styled-components";
export const GameContainer = styled.div`
  margin-top: 30px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const BetText = styled.h2`
  font-size: 24px;
`;

export const SpanBetText = styled.span`
  font-weight: 300;
`;

export const ChooseAGameText = styled.p`
  font-size: 17px;
  font-weight: bold;
  margin-top: 25px;
  color: #868686;
`;

export const AreaGameButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 15px 0;
`;

export const FillYourBetText = styled.h3`
  color: #868686;
  font-size: 17px;
`;

export const DescriptionGameText = styled.p`
  color: #868686;
  font-size: 17px;
`;

export const BallsArea = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const ActionsButtonsArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 35px;
  justify-content: space-between;
  @media (max-width: 768px) {
    gap: 15px;
    justify-content: center;
  }
`;

export const LeftActionsButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
