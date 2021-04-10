import { IonSpinner } from "@ionic/react";

import styles from "./Spinner.module.css";

function Spinner() {
    return(
        <div className={styles.Spinner}>
            <IonSpinner />
        </div>
    )
};

export default Spinner;