import React, { Component, Fragment } from "react";

import classes from "./Checkout.module.css";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route, Redirect } from "react-router-dom";
import Contact from "../../components/Order/Contact/Contact";
import { connect } from "react-redux";

class Checkout extends Component {
  handleCancel = () => {
    this.props.history.goBack();
  };

  handleContinue = () => {
    this.props.history.push("/checkout/contact");
  };

  render() {
    let checkoutSummary = <Redirect to="/" />;

    if (this.props.ingredients) {
      checkoutSummary = <CheckoutSummary ingredients={this.props.ingredients} onCancel={this.handleCancel} onContinue={this.handleContinue} />;
    }
    return (
      <Fragment>
        <section className={classes.Checkout}>{checkoutSummary}</section>
        <Route path={this.props.match.path + "/contact"} component={Contact} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  ingredients: state.burgerBuilderReducer.ingredients,
  totalPrice: state.burgerBuilderReducer.totalPrice
});

export default connect(mapStateToProps)(Checkout);
