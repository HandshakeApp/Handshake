import { IonItem, IonInput, IonLabel, IonContent, IonButton, IonRouterLink } from '@ionic/react';
import { useState } from 'react';
import { Redirect } from "react-router";
import Page from "../Page";
import { useAuth } from "../../util/auth";
import Spinner from '../../components/Spinner/Spinner';


const Signup: React.FC = () => {
    const { user } = useAuth();

    const [loggedIn] = useState<boolean>(user?.isLoggedIn || false);
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const doSignup = async (e) => {
        e.preventDefault();
        try{

        } catch(err) {

        }
    }

    let content;
    if(loggedIn) {
        content = <Redirect to="/Home"/>;
    } else {
        content = (
            <Page name="Sign up">
                <IonContent className="ion-padding">
                    <form onSubmit={(e) => doSignup(e)}>
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
                        <IonItem>
                            <IonLabel position="stacked">Email</IonLabel>
                            <IonInput value={email} onIonChange={e => setEmail(e.detail.value)}>
                            </IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="stacked">Password</IonLabel>
                            <IonInput type="password" value={password}
                                onIonChange={e => setPassword(e.detail.value)}>
                            </IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="stacked">Confirm password</IonLabel>
                            <IonInput type="password" value={password}>
                            </IonInput>
                        </IonItem>
                        <IonButton type="submit" expand="block" >
                            Sign up
                        </IonButton>
                        {loggedIn && <Spinner/>}
                        <p className="text-centre">
                            Already have an account? 
                            <IonRouterLink href="/auth/login">Log in</IonRouterLink>
                        </p>
                    </form>
                </IonContent>
            </Page>
        );
    }

    return content;
};

export default Signup;