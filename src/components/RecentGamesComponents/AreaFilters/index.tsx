import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { gameActions } from '../../../store/gameSlice/index'
import { RootState } from "../../../store";
import { useHistory } from "react-router";
import PatternButton from "../../UI/PatternButton";
import MainButton from "../../UI/MainButton";
import { AreaFilterContainer, FilterButtons, RecentGamesText, FilterText } from './styles'

const AreaFilters: React.FC = (props) => {
    const dispatch = useDispatch();
    const { filterGame } = gameActions;
    const avaiableGames = useSelector((state: RootState) => state.game.avaiableGames);
    const filter = useSelector((state: RootState) => state.game.filteredGame);
    const history = useHistory()
    const handleNewBet = () => {
        history.push('new-bet')
    }
    const handleFilterGame = (event: React.MouseEvent) => {
        const gameType = event.currentTarget.textContent;
        dispatch(filterGame({ gameType }));
    }

    const gameButtons = avaiableGames.map((game, index) => {
        return (
            <PatternButton
                onFilter={handleFilterGame}
                key={index}
                isActive={game.type === filter}
                color={game.color}
                gameButton
            >
                {game.type}
            </PatternButton>
        )
    })
    return (
        <>
            <AreaFilterContainer>
                <FilterButtons>
                    <RecentGamesText>RECENT GAMES</RecentGamesText>
                    <FilterText>Filters</FilterText>
                    {gameButtons}
                </FilterButtons>
                <MainButton onNewBet={handleNewBet}>New Bet</MainButton>

            </AreaFilterContainer>
        </>
    )
}

export default AreaFilters;