import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import calendarImage from '../../../assets/img/Registration/main.png'; // Check your path
import googleIcon from '../../../assets/icons/google-icon.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // 👈 ADD THIS

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false); // 👈 ADD THIS
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 7;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleGoogleSignup = () => {
        console.log('Google signup clicked');
    };

    return (
        <div className='container-fluid signup-container'>
            <div className='row'>
                <div className='col-6 md-6 calendar-section'>
                    <div className="calendar-image-container">
                        <img 
                            src={calendarImage} 
                            alt="Calendar Interface" 
                            className="calendar-image"
                        />
                    </div>
                </div>

                <div className='col-6 md-6 form-section'>
                    <div className="form-container">
                        <div className="text-end mb-4">
                            <h3 className="hebrew-text">הצטרפו אלינו</h3>
                            <h3 className="hebrew-text">והתחילו לנהל את העסק שלכם בקלות</h3>
                        </div>

                        <button className="google-signup-button" onClick={handleGoogleSignup}>
                            <img src={googleIcon} alt="Google" className="google-icon" />
                            Sign up with Google
                        </button>

                        <form className='Signup-form' onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">אימייל</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="johndoe@email.com"
                                />
                            </div>

                            {/* 🔐 PASSWORD FIELD WITH SHOW/HIDE */}
                            <div className="mb-3" style={{ position: "relative" }}>
                                <label htmlFor="exampleInputPassword1" className="form-label">סיסמה</label>
                                <span
                                    onClick={() => setShowPassword(prev => !prev)}
                                    style={{
                                        position: "absolute",
                                        top: "38px",
                                        left: "20px",
                                        cursor: "pointer",
                                        zIndex: 2,
                                        color: "#BCBCBC"
                                    }}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="**************"
                                    style={{ paddingRight: "40px" }}
                                />
                               
                            </div>

                            <button type="submit" className="btn btn-primary signup-button">הרשמה</button>
                        </form>

                        <div className="terms-section text-center mt-3">
                            <p>
                                על ידי הרשמה, אתם מאשרים את <Link to="/privacy">Privacy Policy</Link> ול-<Link to="/terms">Terms of Service</Link> שלנו.
                            </p>
                        </div>

                        <div className="text-center mt-3">
                            <h3>יש לכם כבר חשבון? <Link to="/login">התחברו כאן</Link></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
