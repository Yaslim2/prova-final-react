import styled from "styled-components";
export const ToggleButtonArea = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

export const ToggleButtonIcon = styled.img`
  height: 35px;
  width: 35px;
`;
