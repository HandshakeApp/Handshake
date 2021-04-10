import { IonIcon, IonItem, IonLabel, IonList, IonSpinner } from "@ionic/react";
import { chevronForward } from "ionicons/icons";
import { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import Page from "../Page";
import { getBets } from "../../util/bets";
import useAsync from "../../hooks/useAsync";

import styles from "./Bets.module.css";

const Bets: React.FC = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [bets, setBets] = useState([]);

    const initialiseBets = useCallback(async () => {
        const bets = getBets();
        setLoading(false);
        return bets;
    }, []);

    useAsync(initialiseBets, setBets);

    const goToBetDetail = (betId) => {
        history.push(`/Bets/${betId}`);
    }

    const listItems = bets.map((bet) => (
        <IonItem key={bet._id} onClick={() => goToBetDetail(bet._id)}>
            <IonLabel>
                <h1 className={styles.Heading}>
                    {bet.subject}
                    <IonIcon
                        slot="end"
                        ios={chevronForward}
                        md={chevronForward}
                        size="large"
                    />
                </h1>
                <p>{bet.description}</p>
            </IonLabel>
        </IonItem>
    ));

    let content;
    if (loading) {
        content = (
            <div className={styles.Spinner}>
                <IonSpinner />
            </div>
        );
    } else {
        content = (
            <IonList>
                {listItems}
            </IonList>
        );
    }

    return (
        <Page name="My Bets">
            {content}
        </Page>
    );
};

export default Bets;
