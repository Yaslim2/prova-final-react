import { MainButtonArrow, MainButtonText, MainButtonContainer } from './styles'
import rightArrowSvg from '../../../assets/img/arrow-right.svg'
import rightArrowSaveSvg from '../../../assets/img/arrow-right-save.svg'

const MainButton: React.FC<{ onSave?: () => void, isForm?: boolean, onNewBet?: () => void }> = (props) => {
    const handleClick = () => {
        props.onNewBet && props.onNewBet();
        props.onSave && props.onSave();
    }
    return (
        <MainButtonContainer isCart={!!props.onSave} onClick={handleClick} type="submit" isForm={props.isForm}>
            <MainButtonText>{props.children}</MainButtonText>
            <MainButtonArrow src={props.onSave ? rightArrowSaveSvg : rightArrowSvg} alt="right arrow" />
        </MainButtonContainer>
    )
}

export default MainButton