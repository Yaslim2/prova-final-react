import { AuthenticationArea, AuthenticationText } from './styles'
import { useHistory } from 'react-router'
import ButtonSignUp from '../ButtonSignUp'
import ButtonBack from '../ButtonBack'
import Form from '../Form'

const ActionsArea: React.FC<{
    renderForgotPassword?: boolean, title: string,
    isLogin?: boolean, isEmail?: boolean, isPassword?: boolean,
    isName?: boolean, buttonText: string
}> = (props) => {
    const history = useHistory();
    const handleSignUp = () => {
        history.push('/sign-up')
    }

    const handleBackPage = () => {
        history.goBack();
    }

    return (
        <AuthenticationArea>
            <AuthenticationText>{props.title}</AuthenticationText>
            <Form textButton={props.buttonText} renderEmail={props.isEmail} renderPassword={props.isPassword} renderName={props.isName} renderForgotPassword={props.renderForgotPassword} />
            {props.isLogin ? <ButtonSignUp onSignUp={handleSignUp} /> : <ButtonBack onBackPage={handleBackPage} />}
        </AuthenticationArea>
    )
}

export default ActionsArea