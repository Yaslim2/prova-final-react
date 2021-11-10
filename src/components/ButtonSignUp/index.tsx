import { SignUpButton, SignUpButtonArrow, SignUpButtonText } from './styles'
import rightArrowGraySvg from '../../assets/img/arrow-right-gray.svg'

const ButtonSignUp: React.FC<{ onSignUp: () => void }> = (props) => {
    return (
        <SignUpButton onClick={props.onSignUp}>
            <SignUpButtonText>Sign-Up</SignUpButtonText>
            <SignUpButtonArrow src={rightArrowGraySvg} alt="" />
        </SignUpButton>
    )
}

export default ButtonSignUp