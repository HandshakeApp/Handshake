import { IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import { chevronForward } from "ionicons/icons";
import { useState, useEffect } from "react";
import Page from "../Page";
import { getBets } from "../../util/bets";
import useAsync from "../../hooks/useAsync";

import styles from "./Bets.module.css";


const Bets: React.FC = () => {
    const [ bets, setBets ] = useState([]);

    useAsync(getBets, setBets);

    const listItems = bets.map(bet => (
        <IonItem key={bet._id} onClick={() => alert()}>
            <IonLabel>
                <h1 className={styles.Heading}>
                    {bet.subject}
                    <IonIcon slot="end" ios={chevronForward} md={chevronForward} size="large" />
                </h1>
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