import styled from "styled-components";

export const DescriptionContainerArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    margin-bottom: 25px;
    margin-top: 25px;
  }
`;

export const DescriptionTextArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TextDescription = styled.h1`
  font-size: 65px;
  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

export const TextDescriptionHigher = styled.h1`
  font-size: 83px;
  @media (max-width: 768px) {
    font-size: 65px;
  }
`;
