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
    const [bet, setBet] = useState(null);

    const initialiseBet = useCallback(async () => {
        const bet = await getBetById(id);
        setLoading(false);
        return bet;
    }, [id]);

    useAsync(initialiseBet, setBet);

    let content;
    if(loading || !bet) {
        content = <Spinner/>;
    } else {
        content = (
            <main>
                <h1>
                    {bet.subject}
                </h1>
                <p>
                    {bet.description}
                </p>
            </main>
        );
    }

    return(
        <Page name="Bet Detail">
            {content}
        </Page>
    );
};

export default BetDetail;