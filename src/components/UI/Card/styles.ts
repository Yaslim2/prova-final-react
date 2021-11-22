import styled from "styled-components";
import { greyBorderCart } from "src/shared/themes";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 25px #00000014;
  border: 1px solid ${greyBorderCart};
  border-radius: 14px;
  margin: 15px 0px;
`;
