import { Route } from "react-router-dom";

import Login from "../../pages/Login";

interface Props {
    setLoggedIn: (value: boolean) => void;
};
const AuthRoutes: React.FC<Props> = ({ setLoggedIn }) => {
    return(
        <Route path="/auth/login" exact>
            <Login setLoggedIn={setLoggedIn}/>
        </Route>
    );
    
}

export default AuthRoutes;