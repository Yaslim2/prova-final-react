import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 80px;
  gap: 10px;
  flex-wrap: wrap;
`;

export const AlertTriangleImg = styled.img`
  height: 150px;
  width: 150px;
  @media (max-width: 768px) {
    height: 100px;
    width: 100px;
  }
`;

export const NotFoundText = styled.h1`
  font-size: 60px;
  text-align: center;
  color: #ff6961;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
