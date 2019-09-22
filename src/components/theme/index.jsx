import React from 'react';
import Duck from "../../assets/duck.png";
import { Row, Col, Container } from "reactstrap";
import "./style.css"

export default class Theme extends React.Component {
  render(){
    return(
      <div className="theme-main-container">
        <Container>
        <div>
            <Row>
              <Col md="12" >
                <div className="theme-header"> Theme </div>
              </Col>
            </Row>
            <Row className="theme-container">
              <Col md="8" className="theme-content-container">
                <p>
                Loud, bright, colorful. The arcades of the late 20th century were the place to hang out after a long day at school. 
                The sounds of 8bit music and people cheering filled the room. 
                Arcades and by extension arcade games have paved the way for modern game that so many of us play. 
                It is important to remember the humble origins of the gaming culture and why it still is relevant today. 
                Join us as we embark on a new adventure to set our highest score yet and relive the best years of gaming history.
                </p>
              </Col>
              <Col md="4">
                <img src={Duck} className="duck-img" alt="" />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}