import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { gameActions } from '@store/gameSlice/index';
import { RootState } from "@store/index";
import { useHistory } from "react-router";
import { MainButton, PatternButton } from "@UI/index";

import {
    AreaFilterContainer, FilterButtons,
    RecentGamesText, FilterText, GameButtonsArea
} from './styles'

const AreaFilters: React.FC = (props) => {
    const dispatch = useDispatch();
    const { filterGame } = gameActions;
    const avaiableGames = useSelector((state: RootState) => state.game.avaiableGames);
    const isToggle = useSelector((state: RootState) => state.toggle.isToggle);
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
        const isFiltered = filter?.find((filteredGame) => game.type === filteredGame)
        return (
            <PatternButton
                onFilter={handleFilterGame}
                key={index}
                isActive={isFiltered ? true : false}
                color={game.color}
                gameButton
            >
                {game.type}
            </PatternButton>
        )
    })
    return (
        <>
            <AreaFilterContainer isToggle={isToggle}>
                <FilterButtons>
                    <RecentGamesText>RECENT GAMES</RecentGamesText>
                    <FilterText>Filters</FilterText>
                    <GameButtonsArea>
                        {gameButtons}
                    </GameButtonsArea>
                </FilterButtons>
                <MainButton onNewBet={handleNewBet}>New Bet</MainButton>
            </AreaFilterContainer>
        </>
    )
}

export default AreaFilters;