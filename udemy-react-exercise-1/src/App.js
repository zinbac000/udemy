import React, { Component } from "react";
import "./App.css";

import ValidationComponent from "./component/ValidationComponent/ValidationComponent";
import CharComponent from "./component/CharComponent/CharComponent";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    this.state = {
      text: "",
      showValidation: true
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[App.js] get snapshot");
    return null;
  }

  componentDidMount() {
    console.log("[App.js] mounted");
  }

  componentDidUpdate() {
    console.log("[App.js] updated");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shoulded updated?", true);
    return true;
  }

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

  handleToggleValidation = () => {
    this.setState((prevState) => ({
      showValidation: !prevState.showValidation
    }));
  };

  render() {
    console.log("[App.js] rendering...");
    let chars = null;
    if (this.state.text !== "") {
      chars = this.state.text.split("").map((char, index) => <CharComponent key={index} id={index} letter={char} clicked={this.handleClick} />);
    }

    let textLength = this.state.showValidation ? (
      <p>
        Text length: <strong>{this.state.text.length}</strong>
      </p>
    ) : null;
    return (
      <div className="app">
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.handleToggleValidation}>Toggle Validation</button>
        {textLength}
        <ValidationComponent textLength={this.state.text.length} />
        {chars}
      </div>
    );
  }
}

export default App;
