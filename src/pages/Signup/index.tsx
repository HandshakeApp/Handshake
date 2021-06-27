import { IonItem, IonInput, IonLabel, IonContent, IonButton, IonRouterLink } from '@ionic/react';
import { useState } from 'react';
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import Page from "../Page";
import { useAuth, signup } from "../../util/auth";
import Spinner from '../../components/Spinner/Spinner';


const Signup: React.FC = () => {
    const { user } = useAuth();
    const history = useHistory();

    const [loggedIn] = useState<boolean>(user?.isLoggedIn || false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const doSignup = async (e) => {
        e.preventDefault();
        try{
            if(password === confirmPassword){
                await signup({
                    email,
                    password
                });
                history.push("/auth/login?isSignup=true");

            } else {
                throw new Error("Your passwords must match")
            }
        } catch(err) {
            console.log(err);
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
                            <IonInput type="password" value={confirmPassword} 
                                onIonChange={e => setConfirmPassword(e.detail.value)}>
                            </IonInput>
                        </IonItem>
                        <IonButton type="submit" expand="block" >
                            Sign up
                        </IonButton>
                        {loggedIn && <Spinner/>}
                        <p className="text-centre">
                            Already have an account? 
                            <IonRouterLink href="/auth/login">Log in</IonRouterLink>
                            <br/>
                            <br/>
                            After entering your details, you will be required to sign into the app
                        </p>
                    </form>
                </IonContent>
            </Page>
        );
    }

    return content;
};

export default Signup;