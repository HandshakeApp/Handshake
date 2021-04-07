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
            <Route path="/Home" exact={true}>
                <Home/>
            </Route>
            <Route path="/Bets" exact={true}>
                <Bets/>
            </Route>
            <Route path="/:name" exact={true}>
            </Route>
        </>
    );
};

export default AppMenuItems;