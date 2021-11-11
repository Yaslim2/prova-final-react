import { useState } from "react";
import gamesJson from '../../../assets/data/games.json'
import PatternButton from "../../UI/PatternButton";
import MainButton from "../../UI/MainButton";
import GamesHistory from "../GamesHistory";

import { AreaFilterContainer, FilterButtons, RecentGamesText, FilterText } from './styles'

type TypeJsonGames = {
    "min-cart-value": number;
    types: ArrayGameType
}

type ArrayGameType = GameType[]

type GameType = {
    type: string
    description: string;
    range: number;
    price: number;
    "max-number": number;
    color: string;
}
const AreaFilters: React.FC = (props) => {
    const [avaiableGames, setAvaiableGames] = useState<TypeJsonGames>(gamesJson)
    return (
        <>
            <AreaFilterContainer>
                <FilterButtons>
                    <RecentGamesText>RECENT GAMES</RecentGamesText>
                    <FilterText>Filters</FilterText>
                    {avaiableGames?.types.map((val, index) => {
                        return <PatternButton key={index} txColor={val.color} gameButton>{val.type}</PatternButton>
                    })}
                </FilterButtons>
                <MainButton>New Bet</MainButton>

            </AreaFilterContainer>
            <GamesHistory />
        </>
    )
}

export default AreaFilters;