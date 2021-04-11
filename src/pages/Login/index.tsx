import { IonItem, IonInput, IonContent, IonButton } from '@ionic/react';
import { useState } from 'react';
import { Redirect } from "react-router";
import Page from "../Page";
import { useAuth } from "../../util/auth";
import { login } from "../../util/auth";
import Spinner from '../../components/Spinner/Spinner';


const Login: React.FC = () => {
    const { user } = useAuth();

    const [loggedIn, setLoggedIn] = useState<boolean>(user.isLoggedIn || false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const doLogin = async (e) => {
        e.preventDefault();
        try{
            const user = await login(email, password);
            if(user) {
                setLoggedIn(true);
            }
        } catch(err) {
            setLoggedIn(false);
            console.log(err);
        }
    }

    let content;
    if(loggedIn) {
        content = <Redirect to="/Home"/>;
    } else {
        content = (
            <Page name="Login">
                <IonContent className="ion-padding">
                    <form onSubmit={(e) => doLogin(e)}>
                        <IonItem>
                            <IonInput value={email} placeholder="Enter email" 
                                onIonChange={e => setEmail(e.detail.value!)}>
                            </IonInput>
                        </IonItem>
                        <IonItem>
                            <IonInput type="password" value={password} placeholder="Enter password" 
                                onIonChange={e => setPassword(e.detail.value!)}>
                            </IonInput>
                        </IonItem>
                        <IonButton type="submit" expand="block" >
                            Login
                        </IonButton>
                        {loggedIn && <Spinner/>}
                    </form>
                </IonContent>
            </Page>
        );
    }

    return content;
};

export default Login;