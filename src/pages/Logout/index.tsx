import { useState, useEffect } from "react"
import { Redirect } from "react-router";
import Spinner from "../../components/Spinner/Spinner";
import { logout } from "../../util/auth";


const Logout: React.FC = () => {
    const [ loggedOut, setLoggedOut ] = useState<boolean>(false);
    useEffect(() => {
        const doLogout = async() => {
            await logout();
            setLoggedOut(true);
        };
        doLogout();
    }, []);

    let content = <Spinner/>
    if(loggedOut) {
        content = <Redirect to="/"/>;
    }
    

    return content;
};

export default Logout;