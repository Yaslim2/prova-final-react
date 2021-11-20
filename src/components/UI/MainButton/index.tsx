import { MainButtonArrow, MainButtonText, MainButtonContainer } from './styles'
import { rightArrow, rightArrowSave } from '@assets/img'
import { MainButtonProps } from './types'

const MainButton: React.FC<MainButtonProps> = (props) => {
    const handleClick = () => {
        props.onNewBet && props.onNewBet();
        props.onSave && props.onSave();
    }
    return (
        <MainButtonContainer
            isNewBet={!!props.onNewBet} isCart={!!props.onSave}
            onClick={handleClick} type="submit" isForm={props.isForm}
        >
            <MainButtonText>{props.children}</MainButtonText>
            <MainButtonArrow src={props.onSave ? rightArrowSave : rightArrow} alt="right arrow" />
        </MainButtonContainer>
    )
}

export default MainButton