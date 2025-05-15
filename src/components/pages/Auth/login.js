import React, { useState } from 'react';
import loginImage from '../../../assets/img/Login/login.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/style.css';
import googleIcon from '../../../assets/img/Login/icon/googlebtn.svg';
import eyeOpen from '../../../assets/img/Login/icon/eye-close.svg';   // your open eye SVG
import eyeClosed from '../../../assets/img/Login/icon/eye-open.svg'; // your closed eye SVG

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [realPassword, setRealPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handlePasswordChange = (e) => {
    setRealPassword(e.target.value);
  };

  const getPasswordDisplayValue = () => {
    return showPassword ? realPassword : '*'.repeat(realPassword.length);
  };

  return (
    <div className="container-fluid">
      <div className="row rtl">
        <div className="col-lg-6">
          <div className="login-form">
            <div className="login-form-header text-end d-flex flex-column gap-4">
              <div className="login-form-header-text">
                <h3>ברוכים השבים 👋</h3>
                <h3>המשיכו לחשבון שלכם</h3>
              </div>
              <div className="login-form-header-button d-flex justify-content-center">
                <button className="signup-button d-flex align-items-center gap-2">
                  Sign up with Google
                  <img src={googleIcon} alt="Google icon" className="w-5 h-5 mr-2" />
                </button>
              </div>
            </div>

            <div className="login-form-body rtl pt-4">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">אימייל</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="form-group pt-3">
                  <label htmlFor="password">סיסמה</label>
                  <div className="position-relative">
                    {/* Eye Icon on the Left */}
                    <span
                      onClick={togglePasswordVisibility}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '10px',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer',
                        zIndex: 2
                      }}
                    >
                      <img
                        src={showPassword ? eyeOpen : eyeClosed}
                        alt="Toggle password visibility"
                        width="20"
                      />
                    </span>

                    {/* Custom Password Display */}
                    <input
                      type="text"
                      className="form-control text-end"
                      id="password"
                      value={getPasswordDisplayValue()}
                      onChange={handlePasswordChange}
                      style={{ paddingLeft: '35px' }}
                      autoComplete="off"
                    />
                  </div>
                  <small className="forgot-password form-text text-muted">שכחתם סיסמה?</small>
                </div>

                <div className="button-container pt-5 d-flex flex-column gap-2 align-items-center">
                  <button type="submit" className="login-form-button">התחברות</button>
                  <small className="privacy-policy-text form-text text-muted w-75 px-4">
                    על ידי הרשמה, אתם מאשרים את <span>Privacy Policy</span> ול-<span>Terms of Service</span> שלנו.
                  </small>
                </div>

                <div className="register-container pt-4">
                  <small className="register-text form-text text-muted">
                    עוד לא הצטרפתם? <span>הרשמו כאן</span>
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-6 login-image">
          <img src={loginImage} alt="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
