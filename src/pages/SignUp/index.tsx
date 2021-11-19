import DescriptionArea from '@AuthenticationComponents/DescriptionArea'
import ActionsArea from "@AuthenticationComponents/ActionsArea";
import PageWrapper from '@UI/PageWrapper';

const SignUpPage: React.FC = () => {
    return (
        <PageWrapper isCentered>
            <DescriptionArea />
            <ActionsArea
                buttonText='Register' title='Registration' isSignUp
            />
        </PageWrapper>
    )
}

export default SignUpPage;