import { IonItem, IonInput, IonContent, IonButton } from '@ionic/react';
import { useState } from 'react';
import { Redirect } from "react-router";
import Page from "../Page";
import { useAuth } from "../../util/auth";

interface Props {
    onLogin: () => void;
}

const Login: React.FC<Props> = ({ onLogin }) => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const { loggedIn } = useAuth();
    if(loggedIn) {
        return <Redirect to="/Home"/>
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
                    <IonButton expand="block" onClick={onLogin}>
                        Login
                    </IonButton>
                </form>
            </IonContent>
        </Page>
        
    );
};

export default Login;