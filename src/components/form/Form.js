import React from "react";

class Form extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      comments: '',
      topic: 'react'
    };

    //this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  handleUsernameChange = event => {

    this.setState({
      username: event.target.value
    });

  };

  handleCommentsChange = event => {

    this.setState({
      comments: event.target.value
    });

  };

  handleToggleChange = event => {

    this.setState({
      topic: event.target.value
    });

  };

  handleSubmit = event => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input type={'text'} value={this.state.username}
                 onChange={this.handleUsernameChange}/>
        </div>
        <div>
          <label>Comments</label>
          <textarea value={this.state.comments}
                    onChange={this.handleCommentsChange}/>
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleToggleChange}>
            <option value={"react"}>React</option>
            <option value={"angular"}>Angular</option>
            <option value={"vue"}>Vue</option>
          </select>
        </div>
        <button type={"Submit"}>Submit</button>
      </form>
    )
  }
}

export default Form;
