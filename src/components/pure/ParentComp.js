import React from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'Diego'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Diego'
      });
    }, 2000);
  }


  render() {

    console.log('******** Parent Component Render ********');

    return (
      <div>
        Parent Component
        <RegularComp name={this.state.name}/>
        <MemoComp name={this.state.name}/>
        <PureComp name={this.state.name}/>
      </div>
    );
  }
}

export default ParentComp;
