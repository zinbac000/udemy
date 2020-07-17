import React, { Component } from "react";
import "./App.css";

import ValidationComponent from "./component/ValidationComponent/ValidationComponent";
import CharComponent from "./component/CharComponent/CharComponent";

class App extends Component {
  state = {
    text: ""
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  handleClick = (charIndex) => {
    let newChars = [...this.state.text];
    newChars.splice(charIndex, 1);
    this.setState({
      text: newChars.join("")
    });
  };

  render() {
    let chars = null;
    if (this.state.text !== "") {
      chars = this.state.text.split("").map((char, index) => <CharComponent letter={char} clicked={() => this.handleClick(index)} />);
    }
    return (
      <div className="app">
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <p>
          Text length: <strong>{this.state.text.length}</strong>
        </p>
        <ValidationComponent textLength={this.state.text.length} />
        {chars}
      </div>
    );
  }
}

export default App;
