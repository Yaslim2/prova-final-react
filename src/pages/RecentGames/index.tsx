import { AreaFilters, GamesHistory } from "@RecentGamesComponents/index";
import { NavBar, PageWrapper } from "@UI/index";

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