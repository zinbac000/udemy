import React, { Component } from "react";

import classes from "./Contact.module.css";
import Button from "../../UI/Button/Button";

import axios from "../../../axios-orders";
import Spinner from "../../UI/Spinner/Spinner";
import Input from "../../UI/Input/Input";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import { Redirect } from "react-router-dom";

class Contact extends Component {
  state = {
    contactForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name..."
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },

      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street..."
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZIP Code..."
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 9
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Country..."
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },

      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email..."
        },
        value: "",
        validation: {
          required: true,
          pattern: /^[\w]+@[\w]+\.[\w]{2,3}$/
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" }
          ]
        },
        value: "fastest",
        valid: true
      }
    },
    formValid: false
  };

  handleSubmitOrder = (event) => {
    event.preventDefault();

    const formData = {};
    Object.entries(this.state.contactForm).forEach(([fieldKey, fieldValue]) => {
      formData[fieldKey] = fieldValue.value;
    });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: formData.name,
        address: {
          street: formData.street,
          zipCode: formData.zipCode,
          country: formData.country
        },
        email: formData.email
      },
      deliveryMethod: formData.deliveryMethod
    };

    this.props.submitOrder(order, this.props.token);
  };

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

  handleInputChange(event, inputIdentifier) {
    const updatedContactForm = { ...this.state.contactForm };
    const updatedFormElement = { ...updatedContactForm[inputIdentifier] };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedContactForm[inputIdentifier] = updatedFormElement;

    const formIsValid = Object.values(updatedContactForm).reduce((formValid, fieldObject) => formValid && fieldObject.valid, true);
    console.log(formIsValid);
    this.setState({
      contactForm: updatedContactForm,
      formValid: formIsValid
    });
  }

  render() {
    let { contactForm } = this.state;
    let inputs = Object.keys(contactForm).map((fieldKey) => (
      <Input
        key={fieldKey}
        elementType={contactForm[fieldKey].elementType}
        elementConfig={contactForm[fieldKey].elementConfig}
        value={contactForm[fieldKey].value}
        changed={(event) => this.handleInputChange(event, fieldKey)}
        touched={contactForm[fieldKey].touched}
        invalid={!contactForm[fieldKey].valid}
        shouldValidate={contactForm[fieldKey].validation}
      />
    ));
    let form = (
      <form>
        {inputs}
        <Button disabled={!this.state.formValid} btnType="Success" clicked={this.handleSubmitOrder}>
          ORDER
        </Button>
      </form>
    );

    if (this.props.submitting) {
      form = <Spinner />;
    }
    return (
      <section className={classes.Contact}>
        {this.props.purchased && <Redirect to="/" />}
        <h3 style={{ marginBottom: "15px" }}>Enter you contact</h3>
        {form}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  ingredients: state.burgerBuilderReducer.ingredients,
  totalPrice: state.burgerBuilderReducer.totalPrice,
  submitting: state.orderReducer.submitting,
  purchased: state.orderReducer.purchased,
  token: state.authReducer.idToken
});

const mapDispatchToProps = (dispatch) => ({
  submitOrder: (order, token) => dispatch(actions.submitOrder(order, token))
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Contact, axios));
