import PageWrapper from "../components/PageWrapper/PageWrapper";
import {Switch, Route} from 'react-router-dom'; 
import Dashboard from '../pages/Dashboard';

const ProtectedRoutes = () => {
    return (
        <PageWrapper>
            <Switch>
                <Route path="" component={Dashboard} exact />
            </Switch>
        </PageWrapper>
    )
}

export default ProtectedRoutes;
