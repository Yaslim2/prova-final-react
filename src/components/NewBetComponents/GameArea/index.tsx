import React from 'react'
import { LeftActionsButtons, ActionsButtonsArea, GameContainer, BallsArea, BetText, SpanBetText, ChooseAGameText, AreaGameButtons, FillYourBetText, DescriptionGameText } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { gameActions } from '../../../store/gameSlice'
import { cartActions } from '../../../store/cartSlice'
import { RootState } from '../../../store'
import PatternButton from '../../UI/PatternButton'
import Balls from '../Balls'
import ActionButton from '../ActionButton'

const GameArea: React.FC = (props) => {
    const { selectGame, completeGame, clearGame } = gameActions;
    const { addToCart } = cartActions;
    const dispatch = useDispatch();
    const selectedBalls = useSelector((state: RootState) => state.game.selectedBalls);
    const actualGame = useSelector((state: RootState) => state.game.actualGame);
    const avaiableGames = useSelector((state: RootState) => state.game.avaiableGames);
    const avaiableBalls = useSelector((state: RootState) => state.game.avaiableBalls);

    const handleClearGame = () => {
        dispatch(clearGame());
    }

    const handleSelectGame = (event: React.MouseEvent) => {
        const gameType = event.currentTarget.textContent;
        dispatch(selectGame({ gameType }))
    }

    const handleAddToCart = () => {
        if (selectedBalls.length < actualGame['max-number']) {
            alert('Complete seu jogo!')
            return;
        }
        const item = {
            numbers: [...selectedBalls],
            id: new Date().getTime().toString(),
            gameType: actualGame.type,
            gamePrice: actualGame.price,
        }
        dispatch(addToCart(item))
        dispatch(clearGame());
    }

    const handleCompleteGame = () => {
        dispatch(completeGame());
    }


    const gameButtons = avaiableGames.map((val, index) =>
        <PatternButton
            isActive={val.type === actualGame.type}
            onClick={handleSelectGame} key={index}
            color={val.color} gameButton>
            {val.type}
        </PatternButton>
    );
    const balls = avaiableBalls.map((val) => <Balls key={val}>{val < 9 ? '0' + (val) : val}</Balls>)
    return (
        <GameContainer>
            <BetText>NEW BET <SpanBetText>FOR {actualGame.type.toUpperCase()}</SpanBetText></BetText>
            <ChooseAGameText>Choose a game</ChooseAGameText>
            <AreaGameButtons>
                {gameButtons}
            </AreaGameButtons>
            <FillYourBetText>Fill your bet</FillYourBetText>
            <DescriptionGameText>{actualGame.description}</DescriptionGameText>
            <BallsArea>{balls}</BallsArea>
            <ActionsButtonsArea>
                <LeftActionsButtons>
                    <ActionButton onComplete={handleCompleteGame}>Complete game</ActionButton>
                    <ActionButton onClear={handleClearGame}>Clear game</ActionButton>
                </LeftActionsButtons>
                <ActionButton onAddToCart={handleAddToCart}>Add to cart</ActionButton>
            </ActionsButtonsArea>
        </GameContainer>
    )
}

export default GameArea