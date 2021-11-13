import { ResetPasswordButton, ResetPasswordText } from './styles'
const ButtonResetPassword: React.FC = (props) => {
    return (
        <ResetPasswordButton to="/reset-password">
            <ResetPasswordText>I forgot my password</ResetPasswordText>
        </ResetPasswordButton>
    )
}

export default ButtonResetPassword