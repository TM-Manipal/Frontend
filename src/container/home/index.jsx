import React from "react";
import Hero from "../../components/hero";
import Theme from "../../components/theme"
import Events from "../../components/landingEvent"
import "./style.css";

export default class Home extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      events: null
    }
  }

  componentWillMount = () => {
    this.setState({
      events : [{
        name : "Capture The Flag",
      },
      {
        name : "Mad Ads",
      },
      {
        name : "Gaming",
      },
      {
        name : "Inquizitive",
      },
      {
        name : "Mad Ads",
      },
      {
        name : "Gaming",
      },
      {
        name : "Capture The Flag",
      },
      {
        name : "Mad Ads",
      }]
    })
  }

  render() {
    return (
      <div>
        <Hero/>
        <Theme/>
        <Events events={this.state.events} />
      </div>
    );
  }
}
