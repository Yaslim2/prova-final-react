import styled from "styled-components";

export const ItemArea = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

export const DeleteArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 7px;
  cursor: pointer;
`;

export const ImgTrash = styled.img`
  height: 24px;
  align-self: center;
`;

export const AfterImgTrash = styled.div`
  content: "";
  width: 7px;
  height: 107px;
  display: inline-block;
  border-radius: 6px;
  background-color: #7f3992;
  margin-right: 15px;
`;

export const DetailGameArea = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const NumberGameText = styled.p`
  color: #868686;
  font-size: 15px;
  font-weight: bold;
`;

export const DetailGameTextArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export const GameTypeText = styled.p`
  color: #7f3992;
  font-weight: bold;
  font-size: 16px;
`;

export const GamePriceText = styled.p`
  font-size: 16px;
  font-weight: 300;
  font-style: normal;
  color: #868686;
`;
