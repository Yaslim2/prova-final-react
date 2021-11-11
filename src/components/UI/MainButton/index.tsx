import { MainButtonArrow, MainButtonText, MainButtonContainer } from './styles'
import rightArrowSvg from '../../../assets/img/arrow-right.svg'

const MainButton: React.FC<{ isForm?: boolean }> = (props) => {
    return (
        <MainButtonContainer type="submit" isForm={props.isForm}>
            <MainButtonText>{props.children}</MainButtonText>
            <MainButtonArrow src={rightArrowSvg} alt="right arrow" />
        </MainButtonContainer>
    )
}

export default MainButton