import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Auth.module.css";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";

import * as actions from "../../store/actions/index";
import getErrorMessages from "../../errors";
import { Redirect } from "react-router-dom";

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email Adress..."
        },
        value: "",
        validation: {
          required: true,
          pattern: /^[\w]+@[\w]+\.[\w]{2,3}$/
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password..."
        },
        value: "",
        validation: {
          required: true,
          minLength: 7
        },
        valid: false,
        touched: false
      }
    },
    isSignIn: true
  };

  componentDidMount() {
    if (!this.props.building && this.props.redirectPath !== "/") {
      this.props.onResetRedirectPath();
    }
  }

  checkValidity(value, rules) {
    if (!rules) {
      return true;
    }

    let valid = true;
    if (rules.required) {
      valid &= value.trim() !== "";
    }

    if (rules.minLength) {
      valid &= value.length >= rules.minLength;
    }

    if (rules.maxLength) {
      valid &= value.length <= rules.maxLength;
    }

    if (rules.pattern) {
      valid &= rules.pattern.test(value);
    }

    return valid;
  }

  handleInputChange = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched: true
      }
    };

    this.setState({
      controls: updatedControls
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      controls: {
        email: { value: email },
        password: { value: password }
      },
      isSignIn
    } = this.state;
    this.props.onSubmit(email, password, isSignIn);
  };

  handleSwitchAuth = () => this.setState((prevState) => ({ isSignIn: !prevState.isSignIn }));

  render() {
    let redirect = null;
    if (this.props.isAuthenticated) {
      redirect = <Redirect to={this.props.redirectPath} />;
    }
    let form = Object.entries(this.state.controls).map(([fieldKey, value]) => (
      <Input
        key={fieldKey}
        elementType={this.state.controls[fieldKey].elementType}
        elementConfig={this.state.controls[fieldKey].elementConfig}
        value={this.state.controls[fieldKey].value}
        changed={(event) => this.handleInputChange(event, fieldKey)}
        touched={this.state.controls[fieldKey].touched}
        invalid={!this.state.controls[fieldKey].valid}
        shouldValidate={this.state.controls[fieldKey].validation}
      />
    ));

    if (this.props.loading) {
      form = <Spinner />;
    }

    let error = null;

    if (this.props.error) {
      error = <p style={{ fontSize: "12px", color: "red", marginBottom: "15px" }}>{getErrorMessages(this.props.error)}</p>;
    }

    return (
      <>
        {redirect}
        <div className={classes.Auth}>
          {error}
          <form onSubmit={this.handleSubmit}>
            {form}
            <Button btnType="Success">Submit</Button>
          </form>
          <Button btnType="Danger" clicked={this.handleSwitchAuth}>
            Switch to {this.state.isSignIn ? "Sign up" : "Sign in"}
          </Button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  error: state.authReducer.error,
  building: state.burgerBuilderReducer.building,
  isAuthenticated: state.authReducer.idToken !== null,
  redirectPath: state.authReducer.authRedirectPath
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (email, password, isSignIn) => dispatch(actions.auth(email, password, isSignIn)),
  onResetRedirectPath: () => dispatch(actions.setAuthRedirectPath("/"))
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
