import React from "react";
import TechnoImg from "../../assets/tm.png";
import { Row, Col, Container } from "reactstrap";
import "./style.css";

export default class Hero extends React.Component {
  render() {
    return (
      <Container>
        <Row className="hero-container">
          <div className="hero-main">
            <Col md={{ size: 6, offset: 3 }}>
              <img className="tm-image" src={TechnoImg} alt="" />
            </Col>
            <Col md={{size: 4, offset: 4}} className="pacman-holder">
              <div className="pacman"></div>
            </Col>
          </div>
        </Row>
      </Container>
    );
  }
}
