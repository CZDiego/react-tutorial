import React from "react";
import RefForwardingInput from "./RefForwardingInput";

//rarely used
class RefForwardingParentInput extends React.Component {

  constructor(props) {
    super(props);

    this.inputRef = React.createRef();

  }

  onClickHandler = () => {
    this.inputRef.current.focus();
  };


  render() {
    return (
      <div>
        <RefForwardingInput ref={this.inputRef}/>
        <button onClick={this.onClickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default RefForwardingParentInput;
