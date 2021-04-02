import { useState } from "react";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Switch } from "react-router-dom";
import { AuthContext } from "./util/auth";
import Menu from "./components/Menu/Menu";
import AuthRoutes from "./components/AuthRoutes";
import AppRoutes from "./components/AppRoutes";

const App: React.FC = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <IonApp>
            <AuthContext.Provider value={{ loggedIn }}>
                <IonReactRouter>
                    <IonSplitPane contentId="main">
                        {loggedIn && <Menu /> }
                        <IonRouterOutlet id="main">
                            <Switch>
                                <Route path="/auth">
                                    <AuthRoutes setLoggedIn={setLoggedIn}/>
                                </Route>
                                <Route path="/">
                                    <AppRoutes />
                                </Route>
                            </Switch>
                        </IonRouterOutlet>
                    </IonSplitPane>
                </IonReactRouter>
            </AuthContext.Provider>
        </IonApp>
    );
};

export default App;
