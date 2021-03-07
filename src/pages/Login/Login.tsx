import { IonItem, IonInput } from '@ionic/react';
import { useState } from 'react';

async function Login() {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    return(
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
        </form>
        
    );
};

export default Login;