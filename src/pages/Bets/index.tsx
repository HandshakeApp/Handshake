import { IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import { chevronForward } from "ionicons/icons";
import { useState, useEffect } from "react";
import Page from "../Page";
import { getBets } from "../../util/bets";

import styles from "./Bets.module.css";


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
                <h1 className={styles.Heading}>
                    {bet.subject}
                    <IonIcon slot="end" ios={chevronForward} md={chevronForward} size="large" /> {/*className={styles.Chevron}*/}
                </h1>
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