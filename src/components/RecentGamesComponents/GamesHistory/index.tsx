import { ContainerGamesHistory, DetailsContainer, EmptyGameArea, EmptyGameImg, EmptyGameText } from './styles'
import { useSelector } from 'react-redux';
import boxImg from '../../../assets/img/box.png'
import { RootState } from '../../../store';
import GameItem from '../GameItem';
const GamesHistory: React.FC = (props) => {
    const userGames = useSelector((state: RootState) => state.user.actualUser?.games);
    const filter = useSelector((state: RootState) => state.game.filteredGame);
    const gamesItems = userGames?.filter((game) => {
        return filter ? filter === game.type : true;
    });
    const filteredGames = gamesItems?.map((game, index) => {
        return <GameItem key={index} mainColor={game.color} numbers={game.numbersSelected} date={game.date} price={game.price} type={game.type} />;
    })
    const emptyGame =
        (
            <EmptyGameArea>
                <EmptyGameImg src={boxImg} alt="" />
                <EmptyGameText>Nenhum jogo por aqui...</EmptyGameText>
            </EmptyGameArea>
        )

    const renderEmptyGame = !gamesItems || gamesItems.length === 0 || !filteredGames
    console.log(filteredGames)
    return (
        <>
            <ContainerGamesHistory>
                <DetailsContainer>
                    {filteredGames}
                </DetailsContainer>
                {renderEmptyGame && emptyGame}
            </ContainerGamesHistory>
        </>
    )
}

export default GamesHistory