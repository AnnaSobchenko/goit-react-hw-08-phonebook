import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { getIsLoggedIn } from "redux/auth/authSelectors";

const PrivateRoute = ({children, path}) => {
    const isLoggedIn=useSelector(getIsLoggedIn)
    return ( 
        isLoggedIn?(
            <Route path={path}>{children}</Route>
        ):(<Redirect to="/login" />)
     );
}
 
export default PrivateRoute;