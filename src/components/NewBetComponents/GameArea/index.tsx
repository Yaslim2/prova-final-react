import { LeftActionsButtons, ActionsButtonsArea, GameContainer, BallsArea, BetText, SpanBetText, ChooseAGameText, AreaGameButtons, FillYourBetText, DescriptionGameText } from './styles'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gameActions } from '../../../store/gameSlice'
import { RootState } from '../../../store'
import PatternButton from '../../UI/PatternButton'
import Balls from '../Balls'
import ActionButton from '../ActionButton'

const GameArea: React.FC = () => {
    const { selectGame } = gameActions;
    const dispatch = useDispatch();
    const actualGame = useSelector((state: RootState) => state.game.actualGame);
    const avaiableGames = useSelector((state: RootState) => state.game.avaiableGames);
    const avaiableBalls = useSelector((state: RootState) => state.game.avaiableBalls);

    const handleSelectGame = (event: React.MouseEvent) => {
        const gameType = event.currentTarget.textContent;
        dispatch(selectGame({ gameType }))
    }

    const gameButtons = avaiableGames.map((val, index) => <PatternButton isActive={val.type === actualGame.type} onClick={handleSelectGame} key={index} color={val.color} gameButton>{val.type}</PatternButton>);
    const balls = avaiableBalls.map((val) => <Balls key={val}>{val < 9 ? '0' + (val + 1) : val + 1}</Balls>)
    return (
        <GameContainer>
            <BetText>NEW BET <SpanBetText>FOR MEGA-SENA</SpanBetText></BetText>
            <ChooseAGameText>Choose a game</ChooseAGameText>
            <AreaGameButtons>
                {gameButtons}
            </AreaGameButtons>
            <FillYourBetText>Fill your bet</FillYourBetText>
            <DescriptionGameText>{actualGame.description}</DescriptionGameText>
            <BallsArea>{balls}</BallsArea>
            <ActionsButtonsArea>
                <LeftActionsButtons>
                    <ActionButton>Complete game</ActionButton>
                    <ActionButton>Clear game</ActionButton>
                </LeftActionsButtons>
                <ActionButton isAddToCart>Add to cart</ActionButton>
            </ActionsButtonsArea>
        </GameContainer>
    )
}

export default GameArea