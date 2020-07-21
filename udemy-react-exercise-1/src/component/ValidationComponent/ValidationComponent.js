import React, { Component } from "react";

export default class ValidationComponent extends Component {
  constructor(props) {
    super(props);
    console.log("[ValidationComponent.js] constructor");
    this.textElement = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[ValidationComponent.js] get snapshot");
    return null;
  }

  componentDidMount() {
    console.log("[ValidationComponent.js] mounted");
    this.textElement.current.style.backgroundColor = "black";
  }

  componentDidUpdate() {
    console.log("[ValidationComponent.js] updated");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[ValidationComponent.js] shoulded updated?", true);
    return nextProps.textLength !== this.props.textLength;
  }

  render() {
    console.log("[ValidationComponent] rendering...");
    let validation;
    if (this.props.textLength < 5) {
      validation = (
        <p ref={this.textElement} style={{ color: "red" }}>
          Text too short
        </p>
      );
    } else {
      validation = (
        <p ref={this.textElement} style={{ color: "green" }}>
          Text long enough
        </p>
      );
    }
    return validation;
  }
}
