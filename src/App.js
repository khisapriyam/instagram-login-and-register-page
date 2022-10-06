import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import './App.scss'
import AuthenticateUser from "./middlewares/AuthenticateUser";
import AuthRedirectUser from "./middlewares/AuthRedirectUser";
import Cookies from "js-cookie";
import { useContext, useEffect } from "react";
import axios from "axios";
import AuthContext from "./context/AuthContext";
import LoadingBar from 'react-top-loading-bar'
import LoaderContext from "./context/LoaderContext";

function App() {

  //get auth context
  const { dispatch } = useContext(AuthContext);

  //get loader context
  const { loaderState, loaderDispatch } = useContext(LoaderContext);

  //get token

  const token = Cookies.get('token');
 
  //check logged in user
  useEffect( () => {

    try {
      axios.get('http://localhost:5050/api/user/me', {
        headers : {
          "Authorization" : `Bearer ${token}`
        }
      })
      .then(res => {

        dispatch({ type: 'LOGIN_USER_SUCCESS', payload : res.data })

      })
      .catch( error => {
        dispatch({ type: 'LOGIN_LOGOUT'})
      });
      
    } catch (error) {
      
    }

  }, [token]);




  return (
    <>

      <LoadingBar
        color='#f11946'
        progress={loaderState}
        onLoaderFinished={() => loaderDispatch({ type : "LOADER_END"})}
      />
      
      <Routes>
        <Route path="/login" element={ <AuthRedirectUser><Login /></AuthRedirectUser>}/>
        <Route path="/register" element={ <AuthRedirectUser><Register /></AuthRedirectUser>}/>
        <Route path="/:id" element={ <AuthenticateUser> <Profile /> </AuthenticateUser> }/>
        <Route path="/" element={ <AuthenticateUser> <Home /> </AuthenticateUser> }/>
      </Routes>
    
    </>
  );
}

export default App;
