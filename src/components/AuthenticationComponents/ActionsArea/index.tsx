import { AuthenticationArea, AuthenticationText } from './styles'
import { toast } from 'react-toastify';
import { useHistory } from 'react-router'
import ButtonSignUp from '../ButtonSignUp'
import ButtonBack from '../ButtonBack'
import Form from '../Form'
import { ActionsAreaProps } from './types'

const ActionsArea: React.FC<ActionsAreaProps> = (props) => {
    const history = useHistory();
    const handleSignUp = () => {
        try {
            history.push('/sign-up')
        } catch (e: any) {
            toast.error(e.message);
        }
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