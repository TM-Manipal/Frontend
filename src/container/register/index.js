import React from "react";
import {
 Container, 
 Col, Row, Button, Form, FormGroup, Label, Input
} from 'reactstrap';

export default class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      payload : {
        clgName : "",
        data : []
      }
    }
    this.participant = [];
  }

  clgChange = (e) => {
    let data  = this.state.payload;
    data.clgName = e.currentTarget.value;
    this.setState({
      payload : data
    })
  }

  clgParticipant(e, target){
    let data  = this.state.payload;
    let pre_idx = e.currentTarget.id;
    let idx = pre_idx.substring(pre_idx.indexOf('-') + 1);
    data.data[idx] = {...data.data[idx], [target] : e.currentTarget.value }
    console.log(data)
    this.setState({
      payload : data
    })
  }

  render() {

    for (var i = 0; i < 10; i++) {
        this.participant.push(

            <Row form >
            <Col md={12}>
              { "Participant " +  (i + 1)}
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input name="name" id={'name-' + i} onChange={(e) => this.clgParticipant(e, 'name')}/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email-" id={'email-' + i} onChange={(e) => this.clgParticipant(e, 'email')} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="phNum">Phone Number</Label>
                <Input name="phNum" id={'phnum-' + i} onChange={(e) => this.clgParticipant(e, 'phnum')} />
              </FormGroup>
            </Col>
            
          <Col md={4}>
          <FormGroup>
            <Label for="exampleSelect">Gender</Label>
          <Input type="select" name="select" id={'gender-' + i} onChange={(e) => this.clgParticipant(e, 'gender')}>
            <option>Male</option>
            <option>Female</option>
          </Input>
        </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup check>
          <Label check className="accommodation-chk">
            <Input  type="checkbox" />{' '}
            Accommodation Required
          </Label>
        </FormGroup>
          </Col>
          </Row>

          )
      }

    return (
      <Container>
        <Form>

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
      <Button>Submit</Button>
      </Form>
      </Container>
    )
  }
}