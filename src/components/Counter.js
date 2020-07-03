import React, {Component} from 'react';

class Counter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  incrementCount() {
    /*
    this.setState({
        count: this.state.count + 1
      },
      () => {
        console.log('Callback value', this.state.count);
      }
    );
    */
    this.setState((prevState, props) => ({
        count: prevState.count + 1
      }),
      () => {
        console.log('Callback value', this.state.count);
      });

  }

  incrementFive() {
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  }

  render() {
    return (
      <div>
        <div>Current count: {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
