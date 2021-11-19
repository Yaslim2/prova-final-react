import styled from "styled-components";

export const FormItself = styled.form`
  width: 100%;
`;

export const InputForm = styled.input`
  width: 100%;
  color: #9d9d9d;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-style: italic;
  font-size: 17px;
  border: none;
  background: none;
  padding: 25px;
  border-bottom: 2px solid #ebebeb;
  &::placeholder {
    color: #9d9d9d;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
