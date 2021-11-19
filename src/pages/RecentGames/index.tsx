import AreaFilters from "@RecentGamesComponents/AreaFilters";
import NavBar from "@UI/NavBar";
import PageWrapper from "@UI/PageWrapper"
import GamesHistory from "@RecentGamesComponents/GamesHistory";


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