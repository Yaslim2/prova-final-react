import AreaFilters from "../../components/RecentGamesComponents/AreaFilters";
import { useParams } from "react-router-dom";
import NavBar from "../../components/UI/NavBar";
import PageWrapper from "../../components/UI/PageWrapper"
import GamesHistory from "../../components/RecentGamesComponents/GamesHistory";

type ParamsType = {
    userId?: string;
}

const RecentGames: React.FC = () => {
    const { userId } = useParams<ParamsType>();
    return (
        <PageWrapper>
            <NavBar />
            <AreaFilters idUser={userId} />
            <GamesHistory numbersSelected={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} dateGame={new Date()} priceGame={2.5} type="Lotofácil" />
        </PageWrapper>
    )
}

export default RecentGames;