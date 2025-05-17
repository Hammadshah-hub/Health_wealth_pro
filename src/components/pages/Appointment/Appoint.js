import React from 'react';
import { Container, Form, InputGroup, Button, Carousel } from 'react-bootstrap';
import './Appoint.css';

const Appoint = () => {
  return (
    <Container className="appointment-container" dir="rtl">
      <div className="text-center mb-4">
        <h2 className="main-title">מצא את הספא המתאים לך</h2>
      </div>

      <div className="search-section">
       

        <div className="search-filters">
          <div className="filter-item">
            <span>מתי?</span>
            <InputGroup>
              <Form.Control type="date" />
              <InputGroup.Text>
                <i className="bi bi-calendar"></i>
              </InputGroup.Text>
            </InputGroup>
          </div>

          <div className="filter-item">
            <span>בן כמה תהיה?</span>
            <InputGroup>
              <Form.Control type="number" placeholder="גיל" />
              <InputGroup.Text>
                <i className="bi bi-person"></i>
              </InputGroup.Text>
            </InputGroup>
          </div>

          <div className="filter-item">
            <span>תל אביב</span>
            <InputGroup>
              <Form.Control type="text" placeholder="מיקום" />
              <InputGroup.Text>
                <i className="bi bi-geo-alt"></i>
              </InputGroup.Text>
            </InputGroup>
          </div>
        </div>
      </div>

      <Carousel className="recommendations-carousel">
        <Carousel.Item>
          <div className="carousel-card">
            <img
              src="https://via.placeholder.com/400x300"
              alt="המלצות ספא"
              className="card-image"
            />
            <div className="card-content">
              <h3>ההמלצות שלנו</h3>
              <p>הספא המועדף והמוביל בישראל</p>
              <Button variant="primary">למידע נוסף</Button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-card">
            <img
              src="https://via.placeholder.com/400x300"
              alt="הפתעה לבן/בת הזוג"
              className="card-image"
            />
            <div className="card-content">
              <h3>רוצה להפתיע את בן/בת הזוג?</h3>
              <p>איתנו תוכל לעשות זאת בקלות ובמהירות</p>
              <Button variant="primary">למידע נוסף</Button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Appoint; 