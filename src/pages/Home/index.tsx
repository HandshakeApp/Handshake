import { useLocation } from 'react-router-dom';
import queryString from "query-string";
import Page from "../Page";
import UserDetailsForm from '../../components/Forms/UserDetailsForm';

const Home: React.FC = () => {
    const { search } = useLocation();
    const queryParams = queryString.parse(search);
    const isSignup = queryParams.isSignup === "true";

    let content;
    if(isSignup) {
        content = (
            <>
                <p>As this is your first time logging in, let's collect some information</p>
                <UserDetailsForm/>
            </>
        );
    } else {
        <p>SOME CONTENT</p>
    }

    return(
        <Page name="Home">
            {content}
        </Page>
    );
};

export default Home;