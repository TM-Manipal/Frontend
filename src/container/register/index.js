import React from "react";
import {
 Container, 
 Col, Row, Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import { navigate } from "@reach/router";

export default class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      payload : {
        college : "",
        participants : []
      },
    }
    this.participant = [];
  }

  clgChange = (e) => {
    let data  = this.state.payload;
    data.college = e.currentTarget.value;
    this.setState({
      payload : data
    })
  }

  changeParticipant(e, target){
    let data  = this.state.payload;
    let pre_idx = e.currentTarget.id;
    let idx = pre_idx.substring(pre_idx.indexOf('-') + 1);
    data.participants[idx] = {...data.participants[idx], [target] : e.currentTarget.value }
    this.setState({
      payload : data
    })
  }

  changeAccommodation(e) {
    let data  = this.state.payload;
    let pre_idx = e.currentTarget.id;
    let idx = pre_idx.substring(pre_idx.indexOf('-') + 1);
    data.participants[idx] = {...data.participants[idx], accommodation : e.currentTarget.checked };
    this.setState({
      payload : data
    })
  }

  submitForm = () => {
    let data = this.state.payload.participants;
    data.map(item => {
      if(!item.accommodation) {
        item.accommodation = false;
      }
      return 0;
    })
    let cleardata = data.filter(() => { return true });

    this.setState({
      payload:{
        ...this.state.payload,
        participants: cleardata
      }
    })

    if(cleardata.length < 5) {
      alert("Please fill atleast 5 participant information");
      return;
    }

    if(this.state.payload.college == null) {
      alert("College name is mandatory");
      return;
    }

    fetch("http://"+ process.env.REACT_APP_API_URL + ":" + process.env.REACT_APP_API_PORT +"/events/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.payload)
    })
      .then(res => res.json())
      .then(
        async (result) => {    
          alert(result.message)
          if(result.status === 200) {
            navigate("/");
          }
        },
        (error) => {
          alert("Please fill the form completly as per the instructions")
        }
      )
  }

  componentWillMount () {
    for (var i = 0; i < 10; i++) {
        this.participant.push(

            <Row form key={i}>
            <Col md={12}>
              { "Participant " +  (i + 1)}
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input name="name" id={'name-' + i} onChange={(e) => this.changeParticipant(e, 'name')}/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email-" id={'email-' + i} onChange={(e) => this.changeParticipant(e, 'email')} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="mobile">Phone Number</Label>
                <Input name="mobile" id={'mobile-' + i} onChange={(e) => this.changeParticipant(e, 'mobile')} />
              </FormGroup>
            </Col>
            
          <Col md={4}>
          <FormGroup>
            <Label for="exampleSelect">Gender</Label>
          <Input type="select" name="select" id={'gender-' + i} onChange={(e) => this.changeParticipant(e, 'gender')}>
            <option></option>
            <option>Male</option>
            <option>Female</option>
          </Input>
        </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup check>
          <Label check className="accommodation-chk">
            <Input  id={'checkbox-' + i} onChange={(e) => this.changeAccommodation(e)} type="checkbox" />{' '}
            Accommodation Required
          </Label>
        </FormGroup>
          </Col>
          </Row>
          )
      }
  }

  render() {

    return (
      <Container>
        <Form>
        <br/>
          General Rules and instructions:<br/>
          * Registration fees of ₹1000 will be collected from each college during spot registration<br/>
          * Reporting Time: 11:00 AM (All participants are supposed to report on or before 11:00 AM)<br/>
          * Maximum participants is 10<br/>
          * College ID and permission letter from the college is mandatory<br/>
          * Schedule of the events will be provided on the spot<br/>
          * All the participants are required to be available at the campus for both the events<br/>
          * Accommodation can be availed by outstation participants, please fill the form accordingly<br/>
          * Please fill the form completly, a minimum of 5 participants are necessary to be entered<br/>
          <br/>
          <br/>
        <Col md={12}>
              <FormGroup>
                <Label for="collegeName">College Name</Label>
                <Input  name="collegeName" id="collegeName" onChange={this.clgChange}/>
              </FormGroup>
            </Col>
        {
          this.participant.map((item, k) => {
            return item;
          })
        }
      <Button onClick={this.submitForm}>Submit</Button>
      </Form>
      </Container>
    )
  }
}