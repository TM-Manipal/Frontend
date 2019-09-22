import React from "react";
import { Row, Col, Container } from "reactstrap";
import "./style.css";

export default class Hero extends React.Component {
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
            {events.map((item, k) => {
              return (
                <Col md="3">
                  <div className="event-container">
                    <img
                      className="event-img"
                      src={require(`../../assets/${item.name.replace(
                        / /g,
                        "_"
                      )}.svg`)}
                      alt=""
                    />
                    <div className="hero-event-name">{item.name}</div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}