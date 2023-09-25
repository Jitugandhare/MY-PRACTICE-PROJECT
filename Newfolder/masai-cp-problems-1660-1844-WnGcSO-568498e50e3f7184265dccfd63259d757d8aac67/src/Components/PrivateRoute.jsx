import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";



export const PrivateRoute = ({ children }) => { 
    


    const location = useLocation();
    const [isAuth] = useSelector((store) => store.authReducer.isAuth)
    
    if (!isAuth) {
        return <Navigate to={"/login"} state={location.pathname} replace={ true} />
    } else {
        return children;
    }

};
