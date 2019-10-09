import React from "react";
import TechnoImg from "../../assets/tm.png";
import download from "../../assets/download.png";
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
            <Col md={{size: 4, offset:4}}>
              <a href="https://drive.google.com/uc?export=download&id=1Ul1DMHUSsIp9nxciXyenh6myTHPlVVuH" download>
                <img src={download} alt=""  className="downloadLink"/>
              </a>
            </Col>
          </div>
        </Row>
      </Container>
    );
  }
}
