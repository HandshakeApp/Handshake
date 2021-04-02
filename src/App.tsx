import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Page from "./pages/Page";
import Login from "./pages/Login";

const App: React.FC = () => {
    console.log(Login)
    return (
        <IonApp>
            <IonReactRouter>
                <IonSplitPane contentId="main">
                    <Menu />
                    <IonRouterOutlet id="main">
                        <Switch>
                            <Route path="/" exact={true}>
                                <Redirect to="/Home" />
                            </Route>
                            <Route path="/Home" exact={true}>
                                <Page >
                                    <Login/>
                                </Page>
                            </Route>
                            <Route path="/:name" exact={true}>
                                <Page />
                            </Route>
                        </Switch>
                    </IonRouterOutlet>
                </IonSplitPane>
            </IonReactRouter>
        </IonApp>
    );
};

export default App;
