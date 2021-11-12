import NavBar from "../../components/UI/NavBar";
import PageWrapper from "../../components/UI/PageWrapper";
import BetArea from "../../components/NewBetComponents/BetArea";
const NewBet: React.FC = () => {
    return (
        <PageWrapper>
            <NavBar />
            <BetArea />
        </PageWrapper>
    )
}
export default NewBet;