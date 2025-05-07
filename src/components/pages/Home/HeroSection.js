import React from 'react';
import heroImage from '../../../assets/img/Hero_images/main.png';
import Line from '../../../assets/img/Hero_images/line.png';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-section">
            {/* Background gradient overlay */}
            <div className="hero-bg-gradient"></div>
            {/* Floating boxes */}
            <div className="hero-floating-box hero-box-ai">
                <div className="hero-box-icon">AI</div>
                <div className="hero-box-text">הגברת AI<br />המלצות חכמות, ניהול תורים אוטומטי, חיסכון בזמן</div>
            </div>
            <div className="hero-floating-box hero-box-calendar">
                <div className="hero-box-icon">📅</div>
                <div className="hero-box-text">הוספת תור ללקוח חדש<br />הוספת לקוח חדש למערכת ושליחת תזכורת אוטומטית</div>
            </div>
            <div className="hero-floating-box hero-box-bar">
                <div className="hero-box-bar-inner">90%</div>
                <div className="hero-box-bar-text">שביעות רצון לקוחות</div>
            </div>
            <div className="hero-floating-box hero-box-support">
                <div className="hero-box-icon">💬</div>
                <div className="hero-box-text">תמיכה מהירה<br />צוות תמיכה זמין לכל שאלה</div>
            </div>
            {/* Main content */}
            <div className="hero-content">
                <h1 className="hero-title">
                    הפתרון הדיגיטלי שמחבר<br />
                    בין לקוחות למרכזי ספה<br />
                    ומאפשר יעילות <span className="hero-title-highlight-blue">וחכם</span><span className="hero-title-highlight-green">ניהול</span>.
                </h1>
                <p className="hero-desc">
                    פתרון ניהול מתקדם לכל היבטי העסק, חיסכון בזמן, שיפור את השירות והגדל את הרווחים עם מערכת מותאמת אישית למרכזי ספה ומכוני טיפול.
                </p>
                <button className="hero-btn">התחילו 3 חודשים בחינם</button>
            </div>
            {/* Main hero image */}
            <img src={heroImage} alt="hero" className="hero-main-img" />
            {/* Decorative line image */}
            <img src={Line} alt="line" className="hero-line-img" />
        </div>
    );
};

export default HeroSection;
