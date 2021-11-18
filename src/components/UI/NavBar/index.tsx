import arrowRightGray from '../../../assets/img/arrow-right-gray.svg'
import { userActions } from '../../../store/userSlice'
import { gameActions } from '../../../store/gameSlice'
import { cartActions } from '../../../store/cartSlice'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'

import { Header, CustomizedLink, NavBarContainer, LeftSideNavBar, LogoText, RightSideNavBar, ArrowRightImg, LogoutArea } from './styles'
const NavBar: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { resetGame, clearGame } = gameActions;
    const { clearCart } = cartActions;
    const { logOut } = userActions
    const handleLogOut = () => {
        dispatch(logOut());
        dispatch(resetGame());
        dispatch(clearCart());
        history.replace('/');
    }

    const handleBackToHome = () => {
        dispatch(resetGame());
        dispatch(clearGame());
        dispatch(clearCart());
    }

    return (
        <Header>
            <NavBarContainer>
                <LeftSideNavBar>
                    <LogoText>TGL</LogoText>
                    <CustomizedLink onClick={handleBackToHome} to="/user/recent-games">Home</CustomizedLink>
                </LeftSideNavBar>
                <RightSideNavBar>
                    <CustomizedLink to="#">Account</CustomizedLink>
                    <CustomizedLink to="#">
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