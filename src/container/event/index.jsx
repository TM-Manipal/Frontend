import React from "react";
import Card from '../../components/card';
import tetris from "../../assets/Tetris.png";
import { Container, Row, Col } from 'reactstrap';

export default class Event extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [],
    }
  }

  componentWillMount() {
    this.setState({
        events : [{
            "id": "5d8764675662b215727f7942",
            "name": "Tetris",
            "type": "Assembly",
            "description": "An event dedicated to the love for hardware! Test your knowledge by taking our hardware oriented quiz. If selected, you will get a chance to show off your assembling skills. Finish first and win.",
            "rounds": [
                "5d8764a85662b215727f7946"
            ],
            "minMembersPerTeam": 1,
            "maxMembersPerTeam": 1,
            "venue": "505",
            "startDate": "2019-10-08T18:30:00.000Z",
            "endDate": "2019-10-08T18:30:00.000Z",
            "eventHeads": [
                {
                    "_id": "5d8764675662b215727f7943",
                    "name": "Utsav Jain",
                    "contact": "+917387978311"
                }
            ],
            "rules": [
                "This event will consist of two rounds, Quiz and Assembly",
                "The top 4 team from the quiz will move to the next round.",
                "The quiz will be based on computer hardware related topics.",
                "The duration of the quiz is 30 minutes",
                "The teams that move to the next round will be given a box of all the necessary components to assemble a PC.",
                "Tools will be provided",
                "The teams must take extra care while assembling to not damage the components.",
                "Thermal paste application will be done by the volunteers ONLY.",
                "First team to POST wins!"
            ]
        }]
    })
  }

  render(){
    return(
        <Container>
        {
          this.state.events.map((event, i) => {
            return(
              <Card name={event.name} venue={event.venue} startDate={event.startDate} endDate={event.endDate} type={event.type} rules={event.rules} description={event.description} eventHeads={event.eventHeads}/>
            )
          })
        }
        </Container>
    );
  }
}