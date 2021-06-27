import { IonItem, IonInput, IonLabel, IonContent, IonButton, IonRouterLink } from '@ionic/react';
import { useState } from 'react';
import { Redirect } from "react-router";
import { useLocation } from 'react-router-dom';
import queryString from "query-string";
import Page from "../Page";
import { useAuth } from "../../util/auth";
import { login } from "../../util/auth";
import Spinner from '../../components/Spinner/Spinner';


const Login: React.FC = () => {
    const { user } = useAuth();
    const { search } = useLocation();

    const queryParams = queryString.parse(search);
    const isSignup = queryParams.isSignup === true;

    const [loggedIn, setLoggedIn] = useState<boolean>(user?.isLoggedIn || false);
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
        const redirect = `/Home?isSignup=${isSignup || false}`;
        content = <Redirect to={redirect}/>;
    } else {
        content = (
            <Page name="Login">
                <IonContent className="ion-padding">
                    <form onSubmit={(e) => doLogin(e)}>
                        <IonItem>
                            <IonLabel position="stacked">Email</IonLabel>
                            <IonInput value={email} onIonChange={e => setEmail(e.detail.value)}>
                            </IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="stacked">Password</IonLabel>
                            <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value)}>
                            </IonInput>
                        </IonItem>
                        <IonButton type="submit" expand="block" >
                            Login
                        </IonButton>
                        {loggedIn && <Spinner/>}
                        <p className="text-centre">
                            Don't have an account? 
                            <IonRouterLink href="/auth/signup">Sign up</IonRouterLink>
                        </p>
                    </form>
                </IonContent>
            </Page>
        );
    }

    return content;
};

export default Login;