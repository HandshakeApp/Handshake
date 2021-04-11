import { Route } from "react-router-dom";

import Login from "../../pages/Login";
import Logout from "../../pages/Logout";

const AuthRoutes: React.FC = () => {
    return(
        <>
            <Route path="/auth/login" exact>
                <Login />
            </Route>
            <Route path="/auth/logout" exact>
                <Logout />
            </Route>
        </>
    );
    
}

export default AuthRoutes;