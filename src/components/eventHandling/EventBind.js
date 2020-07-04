import React, {Component} from 'react';

class EventBind extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello!'
    };

    //For approach #3 (BEST APPROACH) You need to bind in constructor
    this.clickHandler = this.clickHandler.bind(this);

  }

  clickHandler() {
    this.setState({
      message: 'GoodBye'
    });
  };

  clickHandler2 = () => {
    this.setState({
      message: 'GoodBye'
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/*
          #1 Bind inline - Performance issues, please avoid it
        */}
        <button onClick={this.clickHandler.bind(this)}>Bye (Event bind)</button>
        <br/>
        {/*
          #2 Arrow function, easy to pass in parameters
        */}
        <button onClick={() => this.clickHandler()}>Bye (Event bind)</button>
        <br/>
        {/*
          #3 Bind in constructor (Best Option) the binding only happens once
          BEST APPROACH RIGHT NOW
        */}
        <button onClick={this.clickHandler}>Bye (Event bind)</button>
        <br/>
        {/*
          #4 Arrow function without binding on constructor, but is in beta
        */}
        <button onClick={this.clickHandler2}>Bye (Event bind)</button>
      </div>
    );
  }

}

export default EventBind;
