import { useParams } from "react-router-dom"
import Page from "../Page";

interface Params {
    id: string
}

const BetDetail: React.FC = () => {
    const { id } = useParams<Params>();
    console.log("BET DETAIL ", id);
    return(
        <Page name="Bet Detail">
            BET DETAIL PAGE
        </Page>
    );
};

export default BetDetail;