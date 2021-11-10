import {
    Main,
} from "./styles";
import DescriptionArea from '../../components/DescriptionArea'
import ActionsArea from "../../components/ActionsArea";

const ResetPasswordPage: React.FC = (props) => {
    return (
        <Main>
            <DescriptionArea />
            <ActionsArea
                buttonText='Send link' title='Reset password' isEmail
            />
        </Main>
    )
}

export default ResetPasswordPage;