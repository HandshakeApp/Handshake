import { Route } from "react-router-dom";

import Login from "../../pages/Login";

const AuthRoutes: React.FC = () => {
    return(
        <Route path="/auth/login" exact>
            <Login />
        </Route>
    );
    
}

export default AuthRoutes;