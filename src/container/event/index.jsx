import React from "react";
import Card from '../../components/card';
import _ from 'lodash';
import {
 Container, 
} from 'reactstrap';

export default class Event extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [],
      modal: false,
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

  getEventById = (id) => {
    return this.state.events.filter(
        function(event){ return event.id === id }
    );
  }

  toggle = (id) => {
    this.setState(prevState => ({
      modal: !prevState.modal,
      currentEvent: this.getEventById(id)[0]
    }));
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    this.payload = {
      "college": data.get('college'),
      "participants": _.times(this.state.currentEvent.maxMembersPerTeam, (i) => {
        return({
          name: data.get('name'+i),
          email: data.get('email'+i),
          mobile: data.get('phno'+i)
        })
      })
    }
    console.log(this.payload);
    //make post to server
    fetch("http://"+ process.env.REACT_APP_API_URL + ":" + process.env.REACT_APP_API_PORT +"/events/"+ this.state.currentEvent.id+"/register", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.payload)
    })
      .then(res => res.json())
      .then(
        async (result) => {
          alert("Registration Successful");  
          this.toggle();
        },
        (error) => {
          alert("Registration Failed");  
        }
      )
  }

  render(){
    return(
        <Container>
        {
          this.state.events.map((event, i) => {
            return(
              <div>
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