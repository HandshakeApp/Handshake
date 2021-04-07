import { IonItem, IonInput, IonContent, IonButton } from '@ionic/react';
import { useState } from 'react';
import { Redirect } from "react-router";
import Page from "../Page";
import { useAuth } from "../../util/auth";
import { login } from "../../util/auth";

interface Props {
    setLoggedIn: (value: boolean) => void;
}

const Login: React.FC<Props> = ({ setLoggedIn }) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { user } = useAuth();
    if(user && user.isLoggedIn) {
        return <Redirect to="/Home"/>
    }

    const doLogin = async () => {
        try{
            const user = await login(email, password);
            if(user) {
                setLoggedIn(user.isLoggedIn);
            }
        } catch(err) {
            console.log(err);
        }
    }

    return(
        <Page name="Login">
            <IonContent className="ion-padding">
                <form>
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
                    <IonButton expand="block" onClick={() => doLogin()}>
                        Login
                    </IonButton>
                </form>
            </IonContent>
        </Page>
        
    );
};

export default Login;