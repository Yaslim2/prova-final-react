import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { GlobalStyle } from "../GlobalStyle";

import LoginPage from "@pages/Login";
import ResetPasswordPage from "@pages/ResetPassword";
import SignUpPage from "@pages/SignUp";
import RecentGamesPage from '@pages/RecentGames'
import NewBetPage from "@pages/NewBet";
import NotFound from "@pages/NotFound";
import { RootState } from "@store/index";

const Routes: React.FC = (props) => {
    const actualUser = useSelector((state: RootState) => state.user.actualUser);
    return (
        <>
            <Switch>
                <Route path="/" exact={true}>
                    <LoginPage />
                </Route>
                <Route path="/sign-up">
                    <SignUpPage />
                </Route>
                <Route path="/reset-password">
                    <ResetPasswordPage />
                </Route>
                <Route path="/user/recent-games" exact>
                    {actualUser ? <RecentGamesPage /> : <Redirect to="/" />}
                </Route>
                <Route path="/user/new-bet" exact>
                    {actualUser ? <NewBetPage /> : <Redirect to="/" />}
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
            <GlobalStyle />
        </>
    )
}

export default Routes;