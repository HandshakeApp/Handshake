import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../util/auth";
import Home from "../../pages/Home";
import Bets from "../../pages/Bets";


const AppMenuItems: React.FC = () => {
    const { user } = useAuth();
	if(!user?.isLoggedIn) {
		return (
			<Redirect to="/auth/login"/>
		)
	}
    return(
        <>
            <Redirect from="/" to="/Home"/>
            <Route path="/Home">
                <Home/>
            </Route>
            <Route path="/Bets">
                <Bets/>
            </Route>
            <Route path="/:name">
            </Route>
        </>
    );
};

export default AppMenuItems;