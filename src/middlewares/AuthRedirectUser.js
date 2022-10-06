import { useContext } from "react";
import {Navigate} from 'react-router-dom';
import AuthContext from "../context/AuthContext";

//create auth
const AuthRedirectUser = ({ children }) => {

    const { isUserLoggedIn } = useContext(AuthContext);

    return isUserLoggedIn ? <Navigate to="/" /> : children 

}


//export middleware
export default AuthRedirectUser;