import { useState, useCallback } from "react";
import { useParams } from "react-router-dom"
import Page from "../Page";
import Spinner from "../../components/Spinner/Spinner";
import { getBetById } from "../../util/bets";
import useAsync from "../../hooks/useAsync";

interface Params {
    id: string
}

const BetDetail: React.FC = () => {
    const { id } = useParams<Params>();

    const [loading, setLoading] = useState(true);
    const [bet, setBet] = useState([]);

    const initialiseBet = useCallback(async () => {
        const bets = getBetById(id);
        setLoading(false);
        return bets;
    }, []);

    useAsync(initialiseBet, setBet);

    let content;
    if (loading) {
        content = <Spinner/>;
    } else {
        content = <div> sdkfugdj</div>
    }

    return(
        <Page name="Bet Detail">
            {content}
        </Page>
    );
};

export default BetDetail;