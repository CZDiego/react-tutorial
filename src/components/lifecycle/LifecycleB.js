import React from "react";

class LifecycleB extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'Diego'
    };

    console.log('LifecycleB constructor')
  }

  static getDerivedStateFromProps(props, state) {

    console.log('LifecycleB getDerivedStateFromProps');

    return null;

  }

  componentDidMount() {
    console.log('LifecycleB componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('LifecycleB shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleB getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('LifecycleB componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('LifecycleB componentWillUnmount');
    //CLEAN UP
  }

  render() {

    console.log('LifecycleB render');

    return (
      <div>
        Lifecycle B
      </div>
    );
  }
}

export default LifecycleB;
