import React from "react";

class RefsDemo extends React.Component {

  constructor(props) {
    super(props);

    this.inputRef = React.createRef();

    //old way
    this.cbRef = null;
    this.setCbRef = element => {
      console.log(this.inputRef);
      this.cbRef = element;
    }
  }

  componentDidMount() {
    //this.inputRef.current.focus();
    if (this.cbRef)
      this.cbRef.focus();
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/>
        <input type="text" ref={this.setCbRef}/>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }

}

export default RefsDemo;
