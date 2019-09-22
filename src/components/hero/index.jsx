import React from "react";
import TechnoImg from "../../assets/tm.png";
import { Row, Col, Button, Container } from "reactstrap";
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
            <Col className="hero-btn">
              <Button color="primary">{" Start "}</Button>
            </Col>
          </div>
        </Row>
      </Container>
    );
  }
}
