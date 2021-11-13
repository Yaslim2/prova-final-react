import PageWrapper from '../../components/UI/PageWrapper';
import DescriptionArea from '../../components/AuthenticationComponents/DescriptionArea'
import ActionsArea from "../../components/AuthenticationComponents/ActionsArea";

const LoginPage: React.FC = () => {
    return (
        <PageWrapper isCentered>
            <DescriptionArea />
            <ActionsArea
                buttonText='Log In' title='Authentication' isLogin
            />
        </PageWrapper>
    )
}

export default LoginPage;