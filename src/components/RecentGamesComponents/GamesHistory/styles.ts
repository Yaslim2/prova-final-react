import styled from "styled-components";

export const ContainerGamesHistory = styled.div`
  padding: 20px 50px;
  flex-direction: column;
  display: flex;
  flex-direction: row;
  color: #868686;
`;

export const BeforeGamesHistory = styled.div`
  content: "";
  width: 7px;
  height: 94px;
  border-radius: 6px;
  background-color: #7f3992;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  gap: 12px;
`;

export const EmptyGameArea = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
`;

export const EmptyGameImg = styled.img`
  height: 150px;
  width: 150px;
`;

export const EmptyGameText = styled.p`
  font-size: 17px;
  font-weight: bold;
  color: #808080;
  margin-top: 20px;
`;
