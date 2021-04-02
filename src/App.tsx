import { useState } from "react";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Login from "./pages/Login";

const App: React.FC = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <IonApp>
            <IonReactRouter>
                <IonSplitPane contentId="main">
                    <Menu />
                    <IonRouterOutlet id="main">
                        <Switch>
                            <Route path="/login" exact>
                                <Login onLogin={() => setLoggedIn(true)}/>
                            </Route>
                            <Route path="/" exact={true}>
                                <Redirect to="/Home" />
                            </Route>
                            {/* <Route path="/Home" exact={true}>
                                    <Login/>
                            </Route> */}
                            <Route path="/:name" exact={true}>
                            </Route>
                        </Switch>
                    </IonRouterOutlet>
                </IonSplitPane>
            </IonReactRouter>
        </IonApp>
    );
};

export default App;
