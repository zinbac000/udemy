import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  meat: 1.3,
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4
};

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 0,
      salad: 0,
      bacon: 0,
      cheese: 0
    },
    purchasable: false,
    purchasing: false
  };

  updatePurChaseState = () => {
    let purchasable = Object.keys(this.state.ingredients).some((key) => this.state.ingredients[key] > 0);
    this.setState({
      purchasable: purchasable
    });
  };

  handleModifyQuantity = (ingredientType, increment) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[ingredientType] += increment;
    if (newIngredients[ingredientType] < 0) {
      return;
    }

    this.setState(
      {
        ingredients: newIngredients
      },
      this.updatePurChaseState
    );
  };

  handlePurchase = () => {
    this.setState({
      purchasing: true
    });
  };

  handleCancelPurchase = () => {
    this.setState({
      purchasing: false
    });
  };

  handleContinuePurchase = () => {
    alert("Continue!");
  };

  render() {
    let { ingredients } = this.state;
    let totalPrice =
      4 +
      Object.keys(ingredients).reduce((total, key) => {
        return total + ingredients[key] * INGREDIENT_PRICES[key];
      }, 0);
    return (
      <Fragment>
        <Modal show={this.state.purchasing} modalClosed={this.handleCancelPurchase}>
          <OrderSummary
            orderContinued={this.handleContinuePurchase}
            orderCancelled={this.handleCancelPurchase}
            ingredients={this.state.ingredients}
            totalPrice={totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredients={this.state.ingredients}
          modifyQuantity={this.handleModifyQuantity}
          price={totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.handlePurchase}
        />
      </Fragment>
    );
  }
}
