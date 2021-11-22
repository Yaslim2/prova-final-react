import styled from "styled-components";
import { lightGray, darkGray } from "src/shared/themes";

export const AccountContainer = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  @media (max-width: 768px) {
  }
`;

export const CircularDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  border: 2px solid ${lightGray};
  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
  }
`;

export const UserImg = styled.img`
  height: 80px;
  width: 80px;
  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

export const TextAccount = styled.h1`
  color: ${darkGray};
  font-size: 50px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const FormArea = styled.div`
  width: 600px;
  @media (max-width: 768px) {
    width: 280px;
  }
`;
