import Cart from '../../CartComponents/Cart'
import GameArea from '../GameArea'
import { BetContainer, AreaGames } from './styles'
const BetArea: React.FC = () => {
    return (
        <AreaGames>
            <BetContainer>
                <GameArea />
            </BetContainer>
            <Cart />
        </AreaGames>
    )
}
export default BetArea