import React from "react";
import Card from '../../components/card';
import {
 Container, 
} from 'reactstrap';

export default class Event extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [],
    }
  }

  componentWillMount() {
    fetch("http://"+ process.env.REACT_APP_API_URL + ":" + process.env.REACT_APP_API_PORT +"/events/")
      .then(res => res.json())
      .then(
        async (result) => {
          await this.setState({
            events: result.data
          })
        },
        (error) => {
          console.log({"err" : error})
        }
      )
  }

  render(){
    return(
        <Container>
        {
          this.state.events.map((event, i) => {
            return(
              <div key={i}>
              <Card id={event.id} toggle={this.toggle} key={i} name={event.name} venue={event.venue} startDate={event.startDate} endDate={event.endDate} type={event.type} rules={event.rules} description={event.description} eventHeads={event.eventHeads}/>
              <hr className="breakit"/>
              </div>
            )
          })
        }
        </Container>
    );
  }
}