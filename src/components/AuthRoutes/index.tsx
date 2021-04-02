import { Route } from "react-router-dom";

import Login from "../../pages/Login";

interface Props {
    onLogin: () => void;
};
const AuthRoutes: React.FC<Props> = ({ onLogin }) => {
    return(
        <Route path="/auth/login" exact>
            <Login onLogin={onLogin}/>
        </Route>
    );
    
}

export default AuthRoutes;