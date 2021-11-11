import { ContainerGamesHistory, BeforeGamesHistory, DetailsArea, GameDateText, NumbersSelectedText, TypeGameText } from './styles'
const GamesHistory: React.FC = (props) => {
    return (
        <>
            <ContainerGamesHistory>
                <BeforeGamesHistory />
                <DetailsArea>
                    <NumbersSelectedText>01,02,03,04,05,06</NumbersSelectedText>
                    <GameDateText>30/11/2020 - (R$ 2,50)</GameDateText>
                    <TypeGameText>Lotofácil</TypeGameText>
                </DetailsArea>
            </ContainerGamesHistory>
        </>
    )
}

export default GamesHistory