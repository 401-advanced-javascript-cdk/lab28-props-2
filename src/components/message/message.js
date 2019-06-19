import React from "react";

class Message extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>{this.props.text}</div>
        <div>{this.props.name}</div>
      </React.Fragment>
    );
  }
}

export default Message;
