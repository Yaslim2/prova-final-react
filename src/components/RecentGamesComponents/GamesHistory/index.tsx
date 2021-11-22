import {
    ContainerGamesHistory, DetailsContainer, EmptyGameArea,
    EmptyGameImg, EmptyGameText, EmptyGameTextSpan
} from './styles'
import { useSelector } from 'react-redux';
import { boxEmptyImg } from '@assets/img'
import { RootState } from '@store/index';
import { GameItem } from '@RecentGamesComponents/index';

const GamesHistory: React.FC = (props) => {
    const userGames = useSelector((state: RootState) => state.user.actualUser?.games);
    const filter = useSelector((state: RootState) => state.game.filteredGame);
    const isToggle = useSelector((state: RootState) => state.toggle.isToggle);
    const gamesItems = userGames?.filter((game) => {
        const filtered = filter?.find((filteredGame) => {
            return filteredGame === game.type;
        })
        if (filter?.length === 0) {
            return true;
        }
        return filtered;
    });
    console.log(gamesItems)
    const filteredGames = gamesItems?.map((game, index) => {
        return <GameItem key={index} mainColor={game.color} numbers={game.numbersSelected} date={game.date} price={game.price} type={game.type} />;
    })

    const emptyGame =
        (
            <EmptyGameArea>
                <EmptyGameImg src={boxEmptyImg} alt="" />
                <EmptyGameText>
                    No games around here...
                </EmptyGameText>
                <EmptyGameText>
                    Click on the <EmptyGameTextSpan>New Bet</EmptyGameTextSpan> button to add a game!
                </EmptyGameText>
            </EmptyGameArea>
        )

    const renderEmptyGame = !gamesItems || gamesItems.length === 0 || !filteredGames

    return (
        <>
            <ContainerGamesHistory isToggle={isToggle}>
                <DetailsContainer>
                    {filteredGames}
                </DetailsContainer>
                {renderEmptyGame && emptyGame}
            </ContainerGamesHistory>
        </>
    )
}

export default GamesHistory