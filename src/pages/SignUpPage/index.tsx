import { Main } from "./styles";
import DescriptionArea from '../../components/DescriptionArea'
import ActionsArea from "../../components/ActionsArea";

const SignUpPage: React.FC = (props) => {
    return (
        <Main>
            <DescriptionArea />
            <ActionsArea
                buttonText='Register' title='Registration' isEmail isName isPassword
            />
        </Main>
    )
}

export default SignUpPage;