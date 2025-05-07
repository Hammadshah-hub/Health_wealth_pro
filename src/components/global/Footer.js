import React from 'react';
import '../../assets/css/style.css';
import logo2 from '../../assets/logo/logo-footer2.png';
import logo1 from '../../assets/logo/logo-footer.png';
import logo3 from '../../assets/logo/Vector.png';
import logo4 from '../../assets/logo/Vector1.png';
import logo5 from '../../assets/logo/Vector2.png';

const Footer = () => {
    return (
        <>
            <div className="footer-topbar">
                
                <div className="footer-topbar-right">
                    <img src={logo1} alt="TheraPlus Logo" className="footer-topbar-logo" />
                    <span className="footer-topbar-bold">נהל את העסק שלך, במקום אחד.</span>
                    <span className="footer-topbar-divider">|</span>
                </div>
                <div className="footer-topbar-links">
                    <a href="#" className="footer-topbar-link"><img src={logo3} alt="מאגרי המידע" className="footer-topbar-icon" /><span>מאגרי המידע</span></a>
                    <span className="footer-topbar-divider">|</span>
                    <a href="#" className="footer-topbar-link"><img src={logo4} alt="הנחה ושירות לקוחות" className="footer-topbar-icon" /><span>הנחה ושירות לקוחות</span></a>
                    <span className="footer-topbar-divider">|</span>
                    <a href="#" className="footer-topbar-link"><img src={logo5} alt="מחירים ושיפור ביצועים ע" className="footer-topbar-icon" /><span>מחירים ושיפור ביצועים ע"י AI</span></a>
                </div>
            </div>
            <footer className="footer-main">
                <div className="footer-content">
                    <div className="footer-logo-section">
                        <img src={logo2} alt="TheraPlus Logo" className="footer-logo-img" />
                    </div>
                    <div className="footer-columns">
                        <div className="footer-col">
                            <h4>אודות</h4>
                            <ul>
                                <li><a href="#">עלינו</a></li>
                                <li><a href="#">חבויות</a></li>
                                <li><a href="#">הלקוחות שלנו</a></li>
                                <li><a href="#">צור קשר</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>לעסקים</h4>
                            <ul>
                                <li><a href="#">הצטרפות</a></li>
                                <li><a href="#">הטמעה לעסקים</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>ללקוחות</h4>
                            <ul>
                                <li><a href="#">הזמנת תור</a></li>
                                <li><a href="#">הטמעה ללקוחות</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>פרטיות</h4>
                            <ul>
                                <li><a href="#">מדיניות פרטיות</a></li>
                                <li><a href="#">תנאי שימוש</a></li>
                                <li><a href="#">הצהרת נגישות</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
