import React from "react";

class UserGreeting extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    }
  }

  render() {

    /* APPROACH 1
    if (this.state.isLoggedIn) {
      return (
        <div>Welcome Diego</div>
      );
    } else {
      return (
        <div>Welcome Guest</div>
      );
    }*/

    //let message = this.state.isLoggedIn ? 'Diego' : 'Guest';
    return (
      <div>Welcome {this.state.isLoggedIn ? 'Diego' : 'Guest'}</div>
    );

    //return this.state.isLoggedIn && <div>Welcome Diego</div>;
  }
}


export default UserGreeting;
