import AreaFilters from "../../components/RecentGamesComponents/AreaFilters";
import NavBar from "../../components/UI/NavBar";
import PageWrapper from "../../components/UI/PageWrapper"
import GamesHistory from "../../components/RecentGamesComponents/GamesHistory";



const RecentGames: React.FC = () => {

    return (
        <PageWrapper>
            <NavBar />
            <AreaFilters  />
            <GamesHistory numbersSelected={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} dateGame={new Date()} priceGame={2.5} type="Lotofácil" />
        </PageWrapper>
    )
}

export default RecentGames;