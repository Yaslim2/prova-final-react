import styled from "styled-components";
import { Link } from "react-router-dom";
export const Header = styled.header`
  color: #707070;
  font-weight: bold;
  border-bottom: 2px solid #ebebeb;
`;
export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px 0 50px;
`;

export const CustomizedLink = styled(Link)`
  color: #707070;
  text-decoration: none;
  font-size: 20px;
`;

export const LeftSideNavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;

export const LogoText = styled.h1`
  font-size: 44px;
  text-align: center;
  cursor: pointer;
  &::after {
    content: "";
    width: 107px;
    height: 7px;
    background-color: #b5c401;
    display: block;
    border-radius: 6px;
  }
`;

export const RightSideNavBar = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
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
