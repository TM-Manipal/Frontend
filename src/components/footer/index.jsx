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
          <Contact name="Sushanth Dias" number="+91 8197972344" />
          &ensp;or&ensp;
          <Contact name="Kaushik Shetty" number="+91 9886515308" />
        </div>
      </div>
    );
  }
}
