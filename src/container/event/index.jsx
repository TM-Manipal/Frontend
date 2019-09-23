import React from "react";
import Card from '../../components/card';
import _ from 'lodash';
import {
 Container, 
 Button, 
 Modal, 
 ModalHeader, 
 ModalBody, 
 Form, 
 Label,
 FormText,
 Input,
 FormGroup
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
    //make post to server
    fetch("http://"+ process.env.REACT_APP_API_URL + ":" + process.env.REACT_APP_API_PORT +"/events/"+ this.currentEvent.id+"/register", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, {
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
              <Card id={event.id} toggle={this.toggle} key={i} name={event.name} venue={event.venue} startDate={event.startDate} endDate={event.endDate} type={event.type} rules={event.rules} description={event.description} eventHeads={event.eventHeads}/>
            )
          })
        }
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Registration Form</ModalHeader>
          <ModalBody>
          <Form onSubmit={this.onFormSubmit}>
              <FormGroup>
                <Label for="college">College:</Label>
                <Input required type="text" name="college" id="college"/>
              </FormGroup>
              {
                this.state.currentEvent != null ?
                _.times(this.state.currentEvent.maxMembersPerTeam, (i) => {
                  return(
                    <div key={i}>
                      <FormText> Participant #{i+1} </FormText>
                      <FormGroup>
                        <Label for="name">Name:</Label>
                        <Input required type="text" name={"name"+i} id={"name"+i}/>
                      </FormGroup>
                      <FormGroup>
                        <Label for="phno">Contact No:</Label>
                        <Input required type="text" name={"phno"+i} id={"phno"+i}/>
                      </FormGroup>
                      <FormGroup>
                        <Label for="email">Email:</Label>
                        <Input required type="email" name={"email"+i} id={"email"+i} />
                      </FormGroup>
                    </div>
                  )
                })
                :
                null
              }
              <Button type="submit" color="primary">Register</Button>{' '}
            </Form>
          </ModalBody>
        </Modal>
        </Container>
    );
  }
}