import React from 'react';
import "./style.css";
import { Container, Row, Col } from 'reactstrap';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  
  render() {
    return (
      <Row className="event-detail-container">
        <Col md="3">
          <img width={"100%"} src={this.props.poster} alt="poster"/>
        </Col>
        <Col>
          <h3>{this.props.type}</h3>
          <p>{this.props.description}</p>
          <ul>
          {
            this.props.rules.map(rule => {
              return (
                  <li>
                    {rule}
                  </li>
              )
            })
          }
          </ul>
        </Col>
      </Row>
    );
  }
}

export default Card;