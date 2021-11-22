import { PageWrapper } from '@UI/index';
import { DescriptionArea, ActionsArea } from '@AuthenticationComponents/index'

const ResetPassword: React.FC = () => {
    return (
        <PageWrapper isCentered>
            <DescriptionArea />
            <ActionsArea
                buttonText='Send link' title='Reset password' isResetPassword
            />
        </PageWrapper>
    )
}

export default ResetPassword;