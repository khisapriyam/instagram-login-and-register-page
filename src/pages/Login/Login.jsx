import React from 'react';
import { GrFacebook } from "react-icons/gr";
import './Login.scss';
import {Link, useNavigate} from 'react-router-dom';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import { useState } from 'react';
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import cookie from 'js-cookie';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { useReducer } from 'react';
import LoaderContext from '../../context/LoaderContext';

const Login = () => {

    //use auth context
    const { dispatch } = useContext(AuthContext);

    //loader context
    const { loaderDispatch } = useContext( LoaderContext );

    //use navigate
    const navigate = useNavigate();

    //create a toast
    const createToast = (msg) => {
        return toast.error(msg);
    }

    //form field state
    const [ input, setInput ] = useState({
        auth : '',
        password : ''
    });

    //handle input
    const handleInput = (e) => {
        setInput((prev) => ({ ...prev, [ e.target.name] : e.target.value }))
    }

    //handle User Login
    const handleUserLogin = async (e) => {
        e.preventDefault();

        try {

            if( !input.auth || !input.password ){
                createToast('All fields are required');

            }else{
                await axios.post('http://localhost:5050/api/user/login', { email : input.auth, password : input.password })
                .then(res => {

                    cookie.set('token', res.data.token);
                    dispatch({ type : 'LOGIN_USER_SUCCESS', payload : res.data.user });
                    navigate('/');
                    loaderDispatch({ type : 'LOADER_START' });

                });

            }
            
        } catch (error) {
            createToast('Wrong email or password');
            
        }

    }

  return (
    <div className='login-container'>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        <div className="login-wrapper">
            <a className='login-logo-link' href="#"><img className='login-logo' src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt="" /></a>

            <form onSubmit={ handleUserLogin } action="" className="login-form">
                <input type="text" className="login-input" name='auth' value={ input.auth } onChange={ handleInput } placeholder='Phone number, username or email'/>
                <input type="text" className="login-input" name='password' value={ input.password } onChange={ handleInput } placeholder='Password'/>
                <button type='submit' className='login-submit'>Log In</button>
            </form>
            <div className="divider">
                OR
            </div>

            <a className='login-with-fb' href="#"> <GrFacebook/> Login with Facebook</a>
            <a className='forgot-password' href="#">Forgot password?</a>
        </div>

        <div className="signup-wrapper">
            <span className="signup-text">Don't have an account? <Link to="/register" className="sign-up-link">Sign up</Link></span>
        </div>

        <div className="get-app">
            <span className="app-text">Get the app.</span>
            <div className="app-logo">
                <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" />
                <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" />
            </div>
        </div>

        <AuthFooter />
    </div>
  )
};

export default Login;