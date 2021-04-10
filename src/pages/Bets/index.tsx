import { IonItem, IonLabel, IonList, IonListHeader } from "@ionic/react";
import { useState, useEffect } from "react";
import Page from "../Page";
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

    const listItems = bets.map(bet => (
        <IonItem key={bet._id} >
            <IonLabel>
                <h2>
                    {bet.subject}
                </h2>
                <p>
                    {bet.description}
                </p>
            </IonLabel>
        </IonItem>
    ));

    return(
        <Page name="My Bets">
            <IonList>
                {listItems}
            </IonList>
        </Page>
    );
};

export default Bets;