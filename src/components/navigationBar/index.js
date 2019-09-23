import React from 'react';
import "./style.css";
import MIT from "../../assets/MIT.png";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="white" light expand="md">
          <img width="20%" src={MIT} alt="MIT" />
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/"><h3>Home</h3></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/events"><h3 className="blink-text">Register</h3></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        { this.props.children  }
      </div>
    );
  }
}

export default NavigationBar;