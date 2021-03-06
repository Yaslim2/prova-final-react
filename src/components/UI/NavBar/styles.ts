import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavBarContainerProps } from "./types";
import { darkGray, lightGreen } from "src/shared/themes";

export const Header = styled.header`
  color: ${darkGray};
  font-weight: bold;
  border-bottom: 2px solid #ebebeb;
  @media (max-width: 768px) {
    width: 100%;
    border: none;
    display: flex;
    justify-content: flex-end;
    padding: 10px;
  }
`;
export const NavBarContainer = styled.nav<NavBarContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px 0 50px;
  width: 100%;
  @media (max-width: 768px) {
    display: ${(props) => (props.isToggle ? "flex" : "none")};
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const CustomizedLink = styled(Link)`
  color: ${darkGray};
  text-decoration: none;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 27px;
  }
`;

export const LeftSideNavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 60px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 60px;
  }
`;

export const LogoText = styled.h1`
  font-size: 44px;
  text-align: center;
  cursor: pointer;
  &::after {
    content: "";
    width: 107px;
    height: 7px;
    background-color: ${lightGreen};
    display: block;
    border-radius: 6px;
  }
  @media (max-width: 768px) {
    font-size: 60px;
    &::after {
      content: "";
      width: 130px;
      height: 7px;
      background-color: ${lightGreen};
      display: block;
      border-radius: 6px;
    }
  }
`;

export const RightSideNavBar = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 60px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const LogoutArea = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const ArrowRightImg = styled.img`
  height: 26px;
`;
