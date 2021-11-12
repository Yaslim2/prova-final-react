import { ContainerGamesHistory, BeforeGamesHistory, DetailsArea, GameDateText, NumbersSelectedText, TypeGameText } from './styles'
type GamesHistoryProps = {
    numbersSelected: number[];
    dateGame: Date;
    priceGame: number;
    type: string;
}

const convertToReal = (val: number): string => {
    return val.toFixed(2).toString().replace('.', ',');
}

const GamesHistory: React.FC<GamesHistoryProps> = (props) => {
    const priceReal = convertToReal(props.priceGame)
    return (
        <>
            <ContainerGamesHistory>
                <BeforeGamesHistory />
                <DetailsArea>
                    <NumbersSelectedText>01,02,03,04,05,06</NumbersSelectedText>
                    <GameDateText>{props.dateGame.toLocaleDateString('pt-BR')} - (R$ {priceReal})</GameDateText>
                    <TypeGameText>{props.type}</TypeGameText>
                </DetailsArea>
            </ContainerGamesHistory>
        </>
    )
}

export default GamesHistory