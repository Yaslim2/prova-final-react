import { DescriptionArea, ActionsArea } from '@AuthenticationComponents/index'
import { PageWrapper } from '@UI/index';

const SignUp: React.FC = () => {
    return (
        <PageWrapper isCentered>
            <DescriptionArea />
            <ActionsArea
                buttonText='Register' title='Registration' isSignUp
            />
        </PageWrapper>
    )
}

export default SignUp;