import styled from "styled-components";
import { Link } from "react-router-dom";

export const ResetPasswordButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #c1c1c1;
  border: none;
  background: none;
  font-family: "Poppins", sans-serif;
  width: 100%;
  margin-top: 15px;
  padding: 0px 20px;
  text-align: center;
`;

export const ResetPasswordText = styled.p`
  font-size: 17px;
  font-style: italic;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
