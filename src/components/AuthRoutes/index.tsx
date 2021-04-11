import { Route, Switch } from "react-router-dom";

import Login from "../../pages/Login";
import Logout from "../../pages/Logout";

const AuthRoutes: React.FC = () => {
    return(
        <Switch>
            <Route path="/auth/login" exact>
                <Login />
            </Route>
            <Route path="/auth/logout" exact>
                <Logout />
            </Route>
        </Switch>
    );
    
}

export default AuthRoutes;