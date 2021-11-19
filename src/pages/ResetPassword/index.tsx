import PageWrapper from '@UI/PageWrapper';
import DescriptionArea from '@AuthenticationComponents/DescriptionArea'
import ActionsArea from "@AuthenticationComponents/ActionsArea";

const ResetPasswordPage: React.FC = () => {
    return (
        <PageWrapper isCentered>
            <DescriptionArea />
            <ActionsArea
                buttonText='Send link' title='Reset password' isResetPassword
            />
        </PageWrapper>
    )
}

export default ResetPasswordPage;