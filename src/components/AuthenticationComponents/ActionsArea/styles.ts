import styled from "styled-components";

export const AuthenticationArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 352px;
  @media (max-width: 768px) {
    width: 280px;
    margin-bottom: 25px;
  }
`;

export const AuthenticationText = styled.h1`
  font-size: 35px;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
