import styled from "styled-components";
import { greyPlaceholder, greyBorderInput } from "src/shared/themes";

export const FormItself = styled.form`
  width: 100%;
`;

export const InputForm = styled.input`
  width: 100%;
  color: ${greyPlaceholder};
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-style: italic;
  font-size: 17px;
  border: none;
  background: none;
  padding: 25px;
  border-bottom: 2px solid ${greyBorderInput};
  &::placeholder {
    color: ${greyPlaceholder};
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
