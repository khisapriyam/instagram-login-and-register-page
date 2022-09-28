import React from 'react';
import { GrFacebook } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import '../Login/Login.scss';
import './Register.scss';

const Register = () => {
  return (
    <div className='login-container'>
      <div className="login-wrapper">
          <a className='login-logo-link' href="#"><img className='login-logo' src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt="" /></a>

          <span className="reg-text">Sign up to see photos and videos from your friends.</span>

          <a className='login-with-fb-register' href="#"> <GrFacebook/> Log in with Facebook</a>

          <div className="divider">
              OR
          </div>
          <form action="" className="login-form">
              <input type="text" className="login-input" placeholder='Mobile number or email address'/>
              <input type="text" className="login-input" placeholder='Full Name'/>
              <input type="text" className="login-input" placeholder='Username'/>
              <input type="password" className="login-input" placeholder='Password'/>

              <p className="reg-form-text">People who use our service may have uploaded your contact information to Instagram. <a href="#">Learn more</a></p>
              <p className="reg-form-text">By signing up, you agree to our <a href="#">Terms</a>. Learn how we collect, use and share your data in our <a href="#">Privacy Policy</a> and how we use cookies and similar technology in our <a href="#">Cookies Policy</a>.</p>
              <button className='login-submit'>Sign up</button>
          </form>
          
          
      </div>

      <div className="signup-wrapper">
          <span className="signup-text">Have an account? <Link to="/login" className="sign-up-link">Log in</Link></span>
      </div>

      <div className="get-app">
          <span className="app-text">Get the app.</span>
          <div className="app-logo">
              <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" />
              <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" />
          </div>
      </div>
  </div>



  )
}

export default Register;