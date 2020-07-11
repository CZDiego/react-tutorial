import React from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'Diego'
    };

    console.log('LifecycleA constructor')
  }

  static getDerivedStateFromProps(props, state) {

    console.log('LifecycleA getDerivedStateFromProps');

    return null;

  }

  componentDidMount() {
    console.log('LifecycleA componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('LifecycleA shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('LifecycleA componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('LifecycleA componentWillUnmount');
    //CLEAN UP
  }

  changeState = () => {
    this.setState({
      name: 'Eduardo'
    });
  };

  render() {

    console.log('LifecycleA render');

    return (
      <div>
        <h1>Lifecycle A</h1>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB/>
      </div>
    );
  }
}

export default LifecycleA;
