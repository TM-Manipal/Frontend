import React from 'react';
import "./style.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
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
          <NavbarBrand href="/">TechnoMelange</NavbarBrand>
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink >Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink >Theme</NavLink>
              </NavItem>
              <NavItem>
                <NavLink >Events</NavLink>
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