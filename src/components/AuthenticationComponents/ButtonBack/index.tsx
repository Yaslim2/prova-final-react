import { BackButton, BackButtonArrow, BackButtonText } from './styles'
import { arrowLeftSvg } from '@assets/img';
import { ButtonBackProps } from './types'
const ButtonBack: React.FC<ButtonBackProps> = (props) => {
    return (
        <BackButton onClick={props.onBackPage}>
            <BackButtonArrow src={arrowLeftSvg} alt="" />
            <BackButtonText>Back</BackButtonText>
        </BackButton>
    )
}
export default ButtonBack;