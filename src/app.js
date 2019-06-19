import React from "react";
import Message from "./components/message/message.js";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "Hello World" };
  }

  render() {
    return <Message text={this.state.text} name="Chris" />;
  }
}

export default App;
