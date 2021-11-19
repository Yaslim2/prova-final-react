import { BackButton, BackButtonArrow, BackButtonText } from './styles'
import leftArrowSvg from '@assets/img/arrow-left.svg'
import { ButtonBackProps } from './types'
const ButtonBack: React.FC<ButtonBackProps> = (props) => {
    return (
        <BackButton onClick={props.onBackPage}>
            <BackButtonArrow src={leftArrowSvg} alt="" />
            <BackButtonText>Back</BackButtonText>
        </BackButton>
    )
}
export default ButtonBack;