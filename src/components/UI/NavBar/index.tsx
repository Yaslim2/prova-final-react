import arrowRightGray from '../../../assets/img/arrow-right-gray.svg'

import { Header, CustomizedLink, NavBarContainer, LeftSideNavBar, LogoText, RightSideNavBar, ArrowRightImg, LogoutArea } from './styles'
const NavBar: React.FC = () => {
    return (
        <Header>
            <NavBarContainer>
                <LeftSideNavBar>
                    <LogoText>TGL</LogoText>
                    <CustomizedLink to="">Home</CustomizedLink>
                </LeftSideNavBar>
                <RightSideNavBar>
                    <CustomizedLink to="">Account</CustomizedLink>
                    <CustomizedLink to="">
                        <LogoutArea>
                            Logout
                            <ArrowRightImg src={arrowRightGray} alt="arrow to right" />
                        </LogoutArea>
                    </CustomizedLink>
                </RightSideNavBar>
            </NavBarContainer>
        </Header>
    )
}

export default NavBar;