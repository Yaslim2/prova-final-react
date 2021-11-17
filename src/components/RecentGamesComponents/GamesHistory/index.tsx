import { ContainerGamesHistory, DetailsContainer } from './styles'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import GameItem from '../GameItem';
const GamesHistory: React.FC = (props) => {
    const userGames = useSelector((state: RootState) => state.user.actualUser?.games);
    const filter = useSelector((state: RootState) => state.game.filteredGame);
    const gamesItems = userGames?.map((game, index) => <GameItem key={index} mainColor={game.color} numbers={game.numbersSelected} date={game.date} price={game.price} type={game.type} />)
    const filteredGames = userGames?.map((game, index) => {
        return filter === game.type ? <GameItem key={index} mainColor={game.color} numbers={game.numbersSelected} date={game.date} price={game.price} type={game.type} /> : null
    })
    return (
        <>
            <ContainerGamesHistory>
                <DetailsContainer>
                    {filter ? filteredGames : gamesItems}
                </DetailsContainer>
            </ContainerGamesHistory>
        </>
    )
}

export default GamesHistory