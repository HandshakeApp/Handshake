import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../util/auth";
import Home from "../../pages/Home";


const AppMenuItems: React.FC = () => {
    const { loggedIn } = useAuth();
	if(!loggedIn) {
		return (
			<Redirect to="/auth/login"/>
		)
	}
    return(
        <>
            <Route path="/Home" exact={true}>
                <Home/>
            </Route>
            <Route path="/:name" exact={true}>
            </Route>
        </>
    );
};

export default AppMenuItems;