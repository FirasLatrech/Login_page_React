import React, { useState, useContext } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';


const Login = () => {
  const auth = useContext(AuthContext);

  var emailRegex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,40}$/;
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // password and email Errors
  const [passwordError, setPasswordError] = useState(null);
  const [emailError, setEmailError] = useState(null);

  // password and email
  function handlePassword(e) {
    let value = e.target.value;
    setPassword(value);
  }

  const handleEmail = (e) => {
    let value = e.target.value;
    setEmail(value);
  }

  // Validation_De_Email
  const validateEmail = (value) => {
    if (emailRegex.test(value)) {
      setEmailError(null);
      return true;
    } else {
      setEmailError('email is not valid');
      return false;
    }
  };

  // Validation_De_Password
  const validatePassword = (value) => {
    if (passwordRegex.test(value)) {
      setPasswordError(null);
      return true;
    } else {
      setPasswordError('Password is not valid');
      return false;
    }
  };

  // verification de email
  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (isEmailValid && isPasswordValid) {
      console.log('success');
      auth.setIsLoggedIn(true);
      navigate('/Home');
    } else {
      console.log('error');
    }
  };
  
  return (
    <div className="body">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css"
      />
      <div className="section full-height">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">

                <h6 className="mb-0 pb-3">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label htmlFor="reg-log"></label>

                  <div className="card-3d-wrap mx-auto">

                    <div className="card-3d-wrapper">

                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">Log In</h4>
                            <form action="" onSubmit={handleSubmit}>

                            <div className="form-group">
                              <input
                                type="email"
                                name="logemail"
                                className="form-style"
                                placeholder="Your Email"
                                id="logemail"
                                autoComplete="off"
                                value={email}
                                onChange={(e) => handleEmail(e)}
                              />
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="password"
                                name="logpass"
                                className="form-style"
                                placeholder="Your Password"
                                id="logpass"
                                autoComplete="off"
                                value={password}
                                onChange={(e) => handlePassword(e)}
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <input type="submit" className='btn mt-4 submit' />
                            <p className="mb-0 mt-4 text-center">
                              <a href="#0" className="link">
                                Forgot your password?
                              </a>
                            </p>
                            </form>
                          </div>
                        </div>
                      </div>
                  

                      <div className="card-back">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">Sign Up</h4>
                            <div className="form-group">
                              <input
                                type="text"
                                name="logname"
                                className="form-style"
                                placeholder="Your Full Name"
                                id="logname"
                                autoComplete="off"
                              />
                              <i className="input-icon uil uil-user"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="email"
                                name="signupemail"
                                className="form-style"
                                placeholder="Your Email"
                                id="signupemail"
                                autoComplete="off"
                              />
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="password"
                                name="signuppass"
                                className="form-style"
                                placeholder="Your Password"
                                id="signuppass"
                                autoComplete="off"
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <input type="submit" className='btn mt-4' />




                          </div>
                        </div>

                      </div>

                    </div>
                  
                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
