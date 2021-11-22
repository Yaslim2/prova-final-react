import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { GlobalStyle } from "../GlobalStyle";

import {
    Login, ResetPassword, Account,
    NotFound, RecentGames, SignUp, NewBet
} from "@pages/index";

import { RootState } from "@store/index";

const Routes: React.FC = (props) => {
    const actualUser = useSelector((state: RootState) => state.user.actualUser);
    return (
        <>
            <Switch>
                <Route path="/" exact={true}>
                    <Login />
                </Route>
                <Route path="/sign-up">
                    <SignUp />
                </Route>
                <Route path="/reset-password">
                    <ResetPassword />
                </Route>
                <Route path="/user/recent-games" exact>
                    {actualUser ? <RecentGames /> : <Redirect to="/" />}
                </Route>
                <Route path="/user/new-bet" exact>
                    {actualUser ? <NewBet /> : <Redirect to="/" />}
                </Route>
                <Route path="/user/account" exact>
                    {actualUser ? <Account /> : <Redirect to="/" />}
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