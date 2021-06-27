import { IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import Page from "../../pages/Page";

export default function UserDetailsForm() {

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");

    const submit = (e) => {

    }

    return (
        <Page name="Sign up">
            <IonContent className="ion-padding">
                <form onSubmit={(e) => submit(e)}>
                    <IonItem>
                        <IonLabel position="stacked">First name</IonLabel>
                        <IonInput value={firstName} onIonChange={e => setFirstName(e.detail.value)}>
                        </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Last name</IonLabel>
                        <IonInput value={lastName} onIonChange={e => setLastName(e.detail.value)}>
                        </IonInput>
                    </IonItem>
                    <IonButton type="submit" expand="block" >
                        Submit
                    </IonButton>
                </form>
            </IonContent>
        </Page>
    )
}
