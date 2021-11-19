import PageWrapper from '@UI/PageWrapper';
import DescriptionArea from '@AuthenticationComponents/DescriptionArea'
import ActionsArea from "@AuthenticationComponents/ActionsArea";

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