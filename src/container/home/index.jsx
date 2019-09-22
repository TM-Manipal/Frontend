import React from "react";
import TechnoImg from "../../assets/tm.png";
import Duck from "../../assets/duck.png";
import { Row, Col, Button } from "reactstrap";
import "./style.css";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Row className="hero-container">
          <div className="test">
            <Col md={{ size: 8, offset: 2 }}>
              <img className="tm-image" src={TechnoImg} alt="" />
            </Col>
            <Col className="hero-btn">
              <Button color="primary">{" Start "}</Button>
            </Col>
          </div>
        </Row>
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
        <div>
          <Row>
            <Col>
                <div className="events-header">Events</div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
