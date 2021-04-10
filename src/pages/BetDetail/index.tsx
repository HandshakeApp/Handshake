import { useState } from "react";
import { useParams } from "react-router-dom"
import Page from "../Page";
import { getBetById } from "../../util/bets";
import useAsync from "../../hooks/useAsync";

interface Params {
    id: string
}

const BetDetail: React.FC = () => {
    const { id } = useParams<Params>();

    const [loading, setLoading] = useState(true);
    const [bet, setBet] = useState([]);

    useAsync(async () => {
        const bet = getBetById(id);
        setLoading(false);
        return bet;
    }, setBet);

    return(
        <Page name="Bet Detail">
            
        </Page>
    );
};

export default BetDetail;