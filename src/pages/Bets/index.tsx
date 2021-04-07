import { useState, useEffect } from "react";
import Page from "../Page";
import { app } from "../../util/mongodb";
import { getBets } from "../../util/bets";


const Bets: React.FC = () => {
    const [ bets, setBets ] = useState([]);
    const user: Realm.User = app.currentUser as Realm.User;

    useEffect(() => {
        const getBetsAsync = async () => {
            const bets = await getBets(user);
            setBets(bets);
        }
        getBetsAsync();
        
    }, [user]);

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