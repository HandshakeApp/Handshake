import { Redirect, Route, Switch } from "react-router-dom";
import { useAuth } from "../../util/auth";
import Home from "../../pages/Home";
import Bets from "../../pages/Bets";
import BetDetail from "../../pages/BetDetail";


const AppMenuItems: React.FC = () => {
    const { user } = useAuth();
	if(!user?.isLoggedIn) {
		return (
			<Redirect to="/auth/login"/>
		)
	}
    return(
        <>
        <Switch>
            <Redirect exact path="/" to="/Home"/>
            <Route path="/Home">
                <Home/>
            </Route>
            <Route path="/Bets/:id" >
                <BetDetail/>
            </Route>
            <Route path="/Bets">
                <Bets/>
            </Route>
            <Route path="/:name">
            </Route>
        </Switch>
        </>
    );
};

export default AppMenuItems;