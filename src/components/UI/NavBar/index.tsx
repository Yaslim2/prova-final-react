import { useDispatch, useSelector } from 'react-redux'
import { rightArrowGray } from '@assets/img'
import { ToggleButton } from '@UI/index'
import { toggleActions } from '@store/toggleSlice'
import { userActions } from '@store/userSlice'
import { gameActions } from '@store/gameSlice'
import { cartActions } from '@store/cartSlice'
import { useHistory } from 'react-router'
import { RootState } from '@store/index'

import {
    Header, CustomizedLink, NavBarContainer, LeftSideNavBar,
    LogoText, RightSideNavBar, ArrowRightImg, LogoutArea
} from './styles'

const NavBar: React.FC = () => {
    const dispatch = useDispatch();
    const isToggle = useSelector((state: RootState) => state.toggle.isToggle);
    const history = useHistory();
    const { toggle } = toggleActions
    const { resetGame, clearGame } = gameActions;
    const { clearCart } = cartActions;
    const { logOut } = userActions
    const handleLogOut = () => {
        dispatch(logOut());
        dispatch(resetGame());
        dispatch(clearCart());
        history.replace('/');
        handleToggle();
    }

    const handleBackToHome = () => {
        handleToggle();
        dispatch(resetGame());
        dispatch(clearGame());
        dispatch(clearCart());
    }

    const handleToggle = () => {
        dispatch(toggle());
    }

    return (
        <>
            <Header>
                <NavBarContainer isToggle={isToggle}>
                    <LeftSideNavBar>
                        <LogoText>TGL</LogoText>
                        <CustomizedLink onClick={handleBackToHome} to="/user/recent-games">Home</CustomizedLink>
                    </LeftSideNavBar>
                    <RightSideNavBar>
                        <CustomizedLink onClick={handleBackToHome} to="/user/account">Account</CustomizedLink>
                        <CustomizedLink to="#">
                            <LogoutArea onClick={handleLogOut}>
                                Logout
                                <ArrowRightImg src={rightArrowGray} alt="arrow to right" />
                            </LogoutArea>
                        </CustomizedLink>
                    </RightSideNavBar>
                </NavBarContainer>
                <ToggleButton onToggle={handleToggle} />
            </Header>
        </>
    )
}

export default NavBar;