import React, { Component, Fragment } from "react";

import classes from "./Checkout.module.css";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import { Route } from "react-router-dom";
import Contact from "../../components/Order/Contact/Contact";

export default class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0
  };

  componentDidMount() {
    const queryString = this.props.location.search;
    const ingredients = {};
    let price = 0;
    if (queryString) {
      const query = new URLSearchParams(queryString);
      for (let entry of query.entries()) {
        const [key, value] = entry;
        if (key === "price") {
          price = +value;
        } else {
          ingredients[key] = +value;
        }
      }
      this.setState({
        ingredients,
        price
      });
    }
  }

  handleCancel = () => {
    this.props.history.goBack();
  };

  handleContinue = () => {
    this.props.history.push("/checkout/contact");
  };

  render() {
    let checkoutSummary = <Spinner />;

    if (this.state.ingredients) {
      checkoutSummary = <CheckoutSummary ingredients={this.state.ingredients} onCancel={this.handleCancel} onContinue={this.handleContinue} />;
    }
    return (
      <Fragment>
        <section className={classes.Checkout}>{checkoutSummary}</section>
        <Route
          path={this.props.match.path + "/contact"}
          render={(props) => <Contact {...props} ingredients={this.state.ingredients} price={this.state.price} />}
        />
      </Fragment>
    );
  }
}
