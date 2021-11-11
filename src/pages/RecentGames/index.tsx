import AreaFilters from "../../components/RecentGamesComponents/AreaFilters";
import NavBar from "../../components/UI/NavBar";
import PageWrapper from "../../components/UI/PageWrapper"

const RecentGames: React.FC = () => {
    return (
        <>
            <PageWrapper>
                <NavBar />
                <AreaFilters />

            </PageWrapper>

        </>
    )
}

export default RecentGames;