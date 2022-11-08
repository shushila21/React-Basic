import React, { Component } from 'react';

class Message extends Component {

  constructor() {
    super()
    this.state = {
      message: 'Welcome Visitor'
    }
  }

  changMessage() {
    this.setState({
        message: 'Thank You for Subscribing'
    })
}

  render() {
    return (
      <div>
        <h1> {this.state.message}</h1>
        <button onClick={()=>this.changMessage()}>Subscribe</button>
      </div>
    )
  }
}

export default Message;