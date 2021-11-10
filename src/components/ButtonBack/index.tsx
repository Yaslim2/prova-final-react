import { BackButton, BackButtonArrow, BackButtonText } from './styles'
import leftArrowSvg from '../../assets/img/arrow-left.svg'
const ButtonBack: React.FC<{ onBackPage: () => void }> = (props) => {
    return (
        <BackButton onClick={props.onBackPage}>
            <BackButtonArrow src={leftArrowSvg} alt="" />
            <BackButtonText>Back</BackButtonText>
        </BackButton>
    )
}
export default ButtonBack;