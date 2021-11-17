import AreaFilters from "../../components/RecentGamesComponents/AreaFilters";
import NavBar from "../../components/UI/NavBar";
import PageWrapper from "../../components/UI/PageWrapper"
import GamesHistory from "../../components/RecentGamesComponents/GamesHistory";



const RecentGames: React.FC = () => {

    return (
        <PageWrapper>
            <NavBar />
            <AreaFilters />
            <GamesHistory />
        </PageWrapper>
    )
}

export default RecentGames;