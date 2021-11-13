import PageWrapper from '../../components/UI/PageWrapper';
import DescriptionArea from '../../components/AuthenticationComponents/DescriptionArea'
import ActionsArea from "../../components/AuthenticationComponents/ActionsArea";

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