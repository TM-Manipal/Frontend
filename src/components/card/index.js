import React from 'react';
import "./style.css";
import { Row, Col, Button } from 'reactstrap';

class Card extends React.Component {
  
  render() {
    return (
      <Row className="event-detail-container">
        <Col md="3">
          <img width="100%"
            src={require(`../../assets/${this.props.name.replace(
              /[\s-]+/g,
              "_"
            )}.png`)}
            alt=""
          />          
        </Col>
        <Col>
          <h4>{this.props.type}</h4>
          {this.props.startDate}
          <p>{this.props.description}</p>
          <ul>
          {
            this.props.rules.map((rule, i) => {
              return (
                  <li key={i}>
                    {rule}
                  </li>
              )
            })
          }
          </ul>
          {
            this.props.eventHeads.map((head, i) => {
              return (
                <div key={i}>
                  {head.name}: {head.contact}
                </div>
              )
            })
          }
          Venue: {this.props.venue}
          <hr/>
        </Col>
      </Row>
    );
  }
}

export default Card;