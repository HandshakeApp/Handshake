import { useState, useEffect } from "react";
import Page from "../Page";
import { getUser } from "../../util/mongodb";
import { getBets } from "../../util/bets";


const Bets: React.FC = () => {
    const [ bets, setBets ] = useState([]);

    useEffect(() => {
        const getBetsAsync = async () => {
            const bets = await getBets();
            setBets(bets);
        }
        getBetsAsync();
        
    }, []);

    return(
        <Page name="My Bets">
            <ul>
                {bets.map(bet => (
                    <li key={bet._id}>{bet.subject}</li>
                ))}
            </ul>
        </Page>
    );
};

export default Bets;