import React from "react";
import { Row, Col, Container } from "reactstrap";
import "./style.css";
import { navigate } from "@reach/router";

export default class Hero extends React.Component {
  
  handleClick = () => {
    navigate("/events");
  }

  render() {
    const { events } = this.props;
  
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <div className="events-header">Events</div>
            </Col>
          </Row>
          <Row>
            { events != null ? events.map((item, k) => {
              return (
                <Col key={k} md="3">
                  <div className="event-container">
                    <img onClick={this.handleClick}
                      className="event-img"
                      src={require(`../../assets/${item.name.replace(
                        /[\s-]+/g,
                        "_"
                      )}.svg`)}
                      alt=""
                    />
                    <div className="hero-event-name">{item.name}</div>
                  </div>
                </Col>
              );
            }) : null}
          </Row>
        </Container>
      </div>
    );
  }
}
