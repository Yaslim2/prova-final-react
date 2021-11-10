import { Main } from "./styles";
import DescriptionArea from '../../components/DescriptionArea'
import ActionsArea from "../../components/ActionsArea";

const LoginPage: React.FC = (props) => {
    return (
        <Main>
            <DescriptionArea />
            <ActionsArea
                buttonText='Log In' title='Authentication' isEmail isPassword
                isLogin renderForgotPassword
            />
        </Main>
    )
}

export default LoginPage;