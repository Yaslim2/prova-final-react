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
`;

export const MainButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b5c401;
  border: none;
  background: none;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-style: italic;
  padding: 35px;
  width: 100%;
  text-align: center;
`;

export const MainButtonText = styled.h1`
  font-size: 35px;
  margin-right: 10px;
`;

export const MainButtonArrow = styled.img`
  height: 30px;
`;
