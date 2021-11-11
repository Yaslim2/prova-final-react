import { Route, Switch } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyle";

import LoginPage from "../pages/Login";
import ResetPasswordPage from "../pages/ResetPassword";
import SignUpPage from "../pages/SignUp";
import RecentGamesPage from '../pages/RecentGames'

const Routes: React.FC = (props) => {
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
                <Route path="/:userId/recent-games" exact>
                    <RecentGamesPage />
                </Route>
            </Switch>
            <GlobalStyle />
        </>
    )
}

export default Routes;