import { Route, Switch } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyle";
import LoginPage from "../pages/LoginPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import SignUpPage from "../pages/SignUpPage";

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
            </Switch>
            <GlobalStyle />
        </>
    )
}

export default Routes;