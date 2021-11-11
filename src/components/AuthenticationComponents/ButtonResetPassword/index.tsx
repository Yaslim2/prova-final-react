import { ResetPasswordButton, ResetPasswordText } from './styles'
const ButtonResetPassword: React.FC<{ onResetPassword: () => void }> = (props) => {
    return (
        <ResetPasswordButton onClick={props.onResetPassword}>
            <ResetPasswordText>I forgot my password</ResetPasswordText>
        </ResetPasswordButton>
    )
}

export default ButtonResetPassword