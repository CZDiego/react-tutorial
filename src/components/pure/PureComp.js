import React from "react";

class PureComp extends React.PureComponent {

  render() {

    console.log('******** Pure Component Render ********');

    return (
      <div>
        Pure Component - {this.props.name}
      </div>
    );
  }

}

export default PureComp;
