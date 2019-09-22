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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
                  maiores. Maxime impedit, sapiente exercitationem nemo eos cum
                  ullam voluptates! Necessitatibus aut autem quidem tenetur totam
                  aperiam consequuntur laudantium ipsam eveniet!
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