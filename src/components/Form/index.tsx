import { useHistory } from 'react-router'
import {
    MainButton, InputForm, FormItself,
    MainButtonArrow, MainButtonText
} from './styles'
import ButtonResetPassword from '../ButtonResetPassword'
import rightArrowSvg from '../../assets/img/arrow-right.svg'
import Card from '../UI/Card'

type RenderInput = boolean | undefined

const Form: React.FC<{
    textButton: string, renderForgotPassword?: boolean,
    renderEmail: RenderInput,
    renderPassword: RenderInput, renderName: RenderInput
}> = (props) => {
    const history = useHistory();

    const handleResetPassword = () => {
        history.push('/reset-password');
    }

    return (
        <Card>
            <FormItself action="">
                {props.renderName && <InputForm type="text" placeholder='Name' />}
                {props.renderEmail && <InputForm type="text" placeholder='Email' />}
                {props.renderPassword && <InputForm type="text" placeholder='Password' />}
                {props.renderForgotPassword && <ButtonResetPassword onResetPassword={handleResetPassword} />}
                <MainButton type="submit">
                    <MainButtonText>{props.textButton}</MainButtonText>
                    <MainButtonArrow src={rightArrowSvg} alt="right arrow" />
                </MainButton>
            </FormItself>
        </Card>
    )
}

export default Form;