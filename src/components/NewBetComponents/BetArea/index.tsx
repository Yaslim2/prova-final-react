import { Cart } from '@CartComponents/index'
import { GameArea } from '@NewBetComponents/index'
import { useSelector } from 'react-redux'
import { BetContainer, AreaGames } from './styles'
import { RootState } from '@store/index'
const BetArea: React.FC = () => {
    const isToggle = useSelector((state: RootState) => state.toggle.isToggle);
    return (
        <AreaGames isToggle={isToggle}>
            <BetContainer>
                <GameArea />
            </BetContainer>
            <Cart />
        </AreaGames>
    )
}
export default BetArea