import { PageWrapper } from '@UI/index';
import { DescriptionArea, ActionsArea } from '@AuthenticationComponents/index'

const Login: React.FC = () => {
    return (
        <PageWrapper isCentered>
            <DescriptionArea />
            <ActionsArea
                buttonText='Log In' title='Authentication' isLogin
            />
        </PageWrapper>
    )
}

export default Login;