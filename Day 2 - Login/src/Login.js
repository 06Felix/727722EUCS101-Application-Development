import React, { useEffect, useState } from 'react';
import './Login.css';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    const handleSignUpClick = () => {
      container.classList.add('right-panel-active');
      setIsSignIn(false);
    };

    const handleSignInClick = () => {
      container.classList.remove('right-panel-active');
      setIsSignIn(true);
    };

    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener('click', handleSignUpClick);
      signInButton.addEventListener('click', handleSignInClick);
    }

    return () => {
      if (signUpButton && signInButton) {
        signUpButton.removeEventListener('click', handleSignUpClick);
        signInButton.removeEventListener('click', handleSignInClick);
      }
    };
  }, []);

  return (
    <div className='loginpagei'>
      <div className="container" id="container">
        <div className={`form-container sign-up-container ${!isSignIn ? 'active' : ''}`}>
          <form action="#">
            <h1>Create Account</h1>
            <br></br>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <br></br>
            <button>Sign Up</button>
          </form>
        </div>
        <div className={`form-container sign-in-container ${isSignIn ? 'active' : ''}`}>
          <form action="#">
            <h1>Sign in</h1>
            <br></br>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
