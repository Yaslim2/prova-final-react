import { SignUpButton, SignUpButtonArrow, SignUpButtonText } from './styles'
import { rightArrowGray } from '@assets/img'
import { ButtonSignUpProps } from './types'

const ButtonSignUp: React.FC<ButtonSignUpProps> = (props) => {
    return (
        <SignUpButton onClick={props.onSignUp}>
            <SignUpButtonText>Sign-Up</SignUpButtonText>
            <SignUpButtonArrow src={rightArrowGray} alt="" />
        </SignUpButton>
    )
}

export default ButtonSignUp