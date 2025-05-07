import React from 'react';
import '../../assets/css/style.css';
import logo1 from '../../assets/logo/logo1.png';

const Header = () => {
    return (
        <header className="header-rtl">
            <button className="login-btn">דברו איתנו</button>
            <nav className="nav-links">
                <a href="#about">מי אנחנו</a>
                <a href="#services">השירות שלנו</a>
                <a href="#faq">שאלות תשובות</a>
                <a href="#contact">צור קשר</a>
            </nav>
            <div className="logo-section">
                <img src={logo1} alt="logo" className="logo-img" />
            </div>
        </header>
    );
};

export default Header;
