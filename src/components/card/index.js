import React from 'react';
import "./style.css";
import { Container, Row, Col, Button } from 'reactstrap';

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
          <Col style={{position: "relative", top:"10px"}} md={{size: 3, offset: 3}}>
            <Button color="primary">Register</Button>
          </Col>
        </Col>
        <Col>
          <h4>{this.props.type}</h4>
          {this.props.startDate}
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
          {
            this.props.eventHeads.map(head => {
              return (
                <div>
                  {head.name}: {head.contact}
                </div>
              )
            })
          }
          Venue: {this.props.venue} AB4
        </Col>
      </Row>
    );
  }
}

export default Card;