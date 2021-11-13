import { AuthenticationArea, AuthenticationText } from './styles'
import { useHistory } from 'react-router'
import ButtonSignUp from '../ButtonSignUp'
import ButtonBack from '../ButtonBack'
import Form from '../Form'

const ActionsArea: React.FC<{
    title: string,
    isLogin?: boolean, buttonText: string, isSignUp?: boolean;
    isResetPassword?: boolean
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
            <Form textButton={props.buttonText} isLogin={props.isLogin} isResetPassword={props.isResetPassword} isSignUp={props.isSignUp} />
            {props.isLogin ? <ButtonSignUp onSignUp={handleSignUp} /> : <ButtonBack onBackPage={handleBackPage} />}
        </AuthenticationArea>
    )
}

export default ActionsArea