import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Switch } from "react-router-dom";
import { AuthContext } from "./util/auth";
import Menu from "./components/Menu/Menu";
import AuthRoutes from "./components/AuthRoutes";
import AppRoutes from "./components/AppRoutes";
import { getUser } from "./util/mongodb";

const App: React.FC = () => {
    const user = getUser();

    return (
        <IonApp>
            <AuthContext.Provider value={{ user }}>
                <IonReactRouter>
                    <IonSplitPane contentId="main">
                        {user.isLoggedIn && <Menu /> }
                        <IonRouterOutlet id="main">
                            <Switch>
                                <Route path="/auth">
                                    <AuthRoutes />
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
