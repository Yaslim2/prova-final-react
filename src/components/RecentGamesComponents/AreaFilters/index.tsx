import { useHistory } from "react-router";
import gamesJson from '../../../assets/data/games.json'
import PatternButton from "../../UI/PatternButton";
import MainButton from "../../UI/MainButton";

import { AreaFilterContainer, FilterButtons, RecentGamesText, FilterText } from './styles'

// type TypeJsonGames = {
//     "min-cart-value": number;
//     types: ArrayGameType
// }

// type ArrayGameType = GameType[]

// type GameType = {
//     type: string
//     description: string;
//     range: number;
//     price: number;
//     "max-number": number;
//     color: string;
// }
const AreaFilters: React.FC<{ idUser?: string }> = (props) => {
    const history = useHistory()
    const handleNewBet = () => {
        history.push(`/${props.idUser}/new-bet`)
    }

    return (
        <>
            <AreaFilterContainer>
                <FilterButtons>
                    <RecentGamesText>RECENT GAMES</RecentGamesText>
                    <FilterText>Filters</FilterText>
                    {gamesJson.types.map((val, index) => {
                        return <PatternButton key={index} color={val.color} gameButton>{val.type}</PatternButton>
                    })}
                </FilterButtons>
                <MainButton onNewBet={handleNewBet}>New Bet</MainButton>

            </AreaFilterContainer>
        </>
    )
}

export default AreaFilters;