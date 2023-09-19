import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom/dist";

export const PrivateRoute = ({children}) => {
    let {auth}=useSelector((data)=>data.authReducer)
    const location=useLocation();
    
    if (!auth) {
        return <Navigate state={{from:location}} to="/login" replace />
        
    }
    return children;
};
