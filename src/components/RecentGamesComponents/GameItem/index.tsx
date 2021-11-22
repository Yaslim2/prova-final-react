import {
    BeforeGamesDetail, DetailGameItemArea, GameItemArea,
    GameDateText, NumbersSelectedText, TypeGameText
} from './styles'

import { convertToReal } from '@helpers/index'
import { GameItemProps } from './types';

const GameItem: React.FC<GameItemProps> = (props) => {
    const numbersToBeRendered = props.numbers.map((number) => number <= 9 ? '0' + number : number);
    return (
        <GameItemArea>
            <BeforeGamesDetail mainColor={props.mainColor} />
            <DetailGameItemArea>
                <NumbersSelectedText>{numbersToBeRendered.join(', ')}</NumbersSelectedText>
                <GameDateText>{props.date} - (R$ {convertToReal(props.price)})</GameDateText>
                <TypeGameText mainColor={props.mainColor}>{props.type}</TypeGameText>
            </DetailGameItemArea>

        </GameItemArea>
    )
}
export default GameItem;