import React from "react";
import "./style.css";

const Contact = props => (
  <a href={"tel:+91" + props.number}>
    {props.name} ({props.number})
  </a>
);

export default class Register extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div>Copyright &copy; {new Date().getFullYear()}</div>
        <br />
        <div>
          If you have any issues or queries, please feel free to contact
          <br />
          <Contact name="name1" number="99999999" />
          &ensp;or&ensp;
          <Contact name="name2" number="99999999" />
        </div>
      </div>
    );
  }
}
