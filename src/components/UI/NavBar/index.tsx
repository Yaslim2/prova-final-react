import arrowRightGray from '../../../assets/img/arrow-right-gray.svg'
import { userActions } from '../../../store/userSlice'
import { gameActions } from '../../../store/gameSlice'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'

import { Header, CustomizedLink, NavBarContainer, LeftSideNavBar, LogoText, RightSideNavBar, ArrowRightImg, LogoutArea } from './styles'
const NavBar: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { resetGame } = gameActions;
    const { logOut } = userActions
    const handleLogOut = () => {
        dispatch(logOut());
        dispatch(resetGame());
        history.replace('/');
    }

    const handleBackToHome = () => {
        dispatch(resetGame());
    }

    return (
        <Header>
            <NavBarContainer>
                <LeftSideNavBar>
                    <LogoText>TGL</LogoText>
                    <CustomizedLink onClick={handleBackToHome} to="/user/recent-games">Home</CustomizedLink>
                </LeftSideNavBar>
                <RightSideNavBar>
                    <CustomizedLink to="">Account</CustomizedLink>
                    <CustomizedLink to="">
                        <LogoutArea onClick={handleLogOut}>
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