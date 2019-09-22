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
