import React, { Component } from "react";

const asyncComponent = (importComponent) => {
  return class extends Component {
    state = {
      component: null
    };

    componentDidMount() {
      importComponent().then((module) => this.setState({ component: module.default }));
    }

    render() {
      return this.state.component ? React.createElement(this.state.component, { ...this.props }) : null;
    }
  };
};

export default asyncComponent;
