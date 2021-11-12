import { LeftActionsButtons, ActionsButtonsArea, GameContainer, BallsArea, BetText, SpanBetText, ChooseAGameText, AreaGameButtons, FillYourBetText, DescriptionGameText } from './styles'
import React, { useState } from 'react'
import gamesJson from '../../../assets/data/games.json'
import PatternButton from '../../UI/PatternButton'
import Balls from '../Balls'
import ActionButton from '../ActionButton'
type GameType = {
    type: string
    description: string;
    range: number;
    price: number;
    "max-number": number;
    color: string;
}


const GameArea: React.FC = () => {
    const [activeGame, setActiveGame] = useState<GameType>(gamesJson.types[0]);


    const handleClickPatternButton = (e: React.MouseEvent) => {
        gamesJson.types.forEach((val) => {
            if (val.type === e.currentTarget.textContent) {
                setActiveGame(val);

            }
        })
    }
    const gameButtons = gamesJson.types.map((val, index) => <PatternButton isActive={val.type === activeGame.type} onClick={handleClickPatternButton} key={index} color={val.color} gameButton>{val.type}</PatternButton>);
    const balls = Array(activeGame.range).fill(0).map((_, index) => <Balls>{index < 9 ? '0' + (index + 1) : index + 1}</Balls>)
    return (
        <GameContainer>
            <BetText>NEW BET <SpanBetText>FOR MEGA-SENA</SpanBetText></BetText>
            <ChooseAGameText>Choose a game</ChooseAGameText>
            <AreaGameButtons>
                {gameButtons}
            </AreaGameButtons>
            <FillYourBetText>Fill your bet</FillYourBetText>
            <DescriptionGameText>{activeGame.description}</DescriptionGameText>
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