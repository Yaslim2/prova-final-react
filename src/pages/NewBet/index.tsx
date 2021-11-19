import NavBar from "@UI/NavBar";
import PageWrapper from "@UI/PageWrapper";
import BetArea from "@NewBetComponents/BetArea";
const NewBet: React.FC = () => {
    return (
        <PageWrapper>
            <NavBar />
            <BetArea />
        </PageWrapper>
    )
}
export default NewBet;