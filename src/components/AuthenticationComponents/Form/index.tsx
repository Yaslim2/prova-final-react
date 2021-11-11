import { useHistory } from 'react-router'
import MainButton from '../../UI/MainButton'
import { InputForm, FormItself } from './styles'
import ButtonResetPassword from '../ButtonResetPassword'

import Card from '../../UI/Card'

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
                <MainButton isForm>
                    {props.textButton}
                </MainButton>
            </FormItself>
        </Card>
    )
}

export default Form;