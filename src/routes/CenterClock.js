import React from "react";
import { Row, Col } from "antd";



class Clock extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date() }; // initialise the state
  }
  componentDidMount() {
    // create the interval once component is mounted

    this.update = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1 * 1000); // every 1 seconds
  }
  componentWillUnmount() {
    // delete the interval just before component is removed
    clearInterval(this.update);
  }
  render() {
    const { time } = this.state; // retrieve the time from state
    var day = time.getDate();
    var mnth = time.getMonth();
    var year = time.getFullYear();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var tdate = day + "/" + mnth + "/" + year;
    var strTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
    return (
      <div>
        <h2>
          {/* print the string prettily */}
          {tdate}
          <hr />
          {strTime}
        </h2>
      </div>
    );
  }
}

const CenterClock = props => {
  const colstyle = {
    border: "1px solid",
    textAlign: "center",
    margin: "25% 30% auto"
  };

  return (
    <div style={colstyle}>
      <Row>
        <Col xs={1} sm={3} md={6} lg={8} xl={10} />
        <Col xs={20} sm={17} md={12} lg={8} xl={4}>
          <Clock />
        </Col>
        <Col xs={1} sm={3} md={6} lg={8} xl={10} />
      </Row>
    </div>
  );
};

export default CenterClock;
