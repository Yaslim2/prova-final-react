import { SignUpButton, SignUpButtonArrow, SignUpButtonText } from './styles'
import rightArrowGraySvg from '@assets/img/arrow-right-gray.svg'
import { ButtonSignUpProps } from './types'

const ButtonSignUp: React.FC<ButtonSignUpProps> = (props) => {
    return (
        <SignUpButton onClick={props.onSignUp}>
            <SignUpButtonText>Sign-Up</SignUpButtonText>
            <SignUpButtonArrow src={rightArrowGraySvg} alt="" />
        </SignUpButton>
    )
}

export default ButtonSignUp