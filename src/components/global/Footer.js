import React from 'react';
import '../../assets/css/style.css';
import logo2 from '../../assets/logo/logo-footer2.png';

const Footer = () => {
    return (
        <footer className="footer-main" style={{
            background: 'linear-gradient(0deg, #032B48, #032B48), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))'
        }}>
            <div className="container py-5">
                <div className="row justify-content-between sec-d" dir="rtl">
                    {/* Logo Column */}
                    <div className="col-lg-3 mb-4 mb-lg-0 text-center">
                        <img src={logo2} alt="TheraPlus" className="mb-3 footer-logo" style={{ width: '180px' }} />
                    </div>

                    {/* Navigation Columns */}
                    <div className="col-lg-8">
                        <div className="row">
                            {/* לעסקים Column */}
                            <div className="col-6 col-md-3 mb-4">
                                <h5 className="footer-heading">לעסקים</h5>
                                <ul className="footer-links">
                                    <li><a href="#">הצטרפות</a></li>
                                    <li><a href="#">תמיכה טכנית</a></li>
                                    <li><a href="#">תנאי שימוש</a></li>
                                </ul>
                            </div>

                            {/* ללקוחות Column */}
                            <div className="col-6 col-md-3 mb-4">
                                <h5 className="footer-heading">ללקוחות</h5>
                                <ul className="footer-links">
                                    <li><a href="#">הזמנת תור</a></li>
                                    <li><a href="#">תמיכה ללקוחות</a></li>
                                </ul>
                            </div>

                            {/* פרטיות Column */}
                            <div className="col-6 col-md-3 mb-4">
                                <h5 className="footer-heading">פרטיות</h5>
                                <ul className="footer-links">
                                    <li><a href="#">מדיניות פרטיות</a></li>
                                    <li><a href="#">תנאי שימוש</a></li>
                                    <li><a href="#">הצהרת נגישות</a></li>
                                </ul>
                            </div>

                            {/* אודות Column */}
                            <div className="col-6 col-md-3 mb-4">
                                <h5 className="footer-heading">אודות</h5>
                                <ul className="footer-links">
                                    <li><a href="#">עלינו</a></li>
                                    <li><a href="#">יתרונות</a></li>
                                    <li><a href="#">הלקוחות שלנו</a></li>
                                    <li><a href="#">יצירת קשר</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
