import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: false,
    };
  }
  render() {
    // .........conditional renderring (if else)...........................
    // if (this.state.isLoggedin) {
    //   return <div>Welcome Shushila you are logged in</div>;
    // } else {
    //   return <div>Welcome Shushila. You are not logged in</div>;
    // }
    // ................element variables............
    // let message;
    // if (this.state.isLoggedin) {
    //   message = <div>Welcome Siri You are logged in when state is true</div>;
    // } else {
    //   message = (
    //     <div>Welcome Shushila. You are not logged in when state is false</div>
    //   );
    // }
    // return <div>{message}</div>;

    // ****************** ternary conditional operator *******************
    // return this.state.isLoggedin ? (
    //   <div>Welcome siri you are loggedin when true</div>
    // ) : (
    //   <div>Welcome siri you are loggedin when false</div>
    // );

    // ******short circuit operator*******

    return (
      this.state.isLoggedin && (
        <div>Welcome Siri you are loggedin when true</div>
      )
    );
  }
}
export default UserGreeting;
