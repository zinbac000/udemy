import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
  meat: 1.3,
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    axios
      .get("/ingredients.json")
      .then((res) => {
        this.setState({
          ingredients: res.data
        });
      })
      .catch((error) => this.setState({ error: true }));
  }

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
    const queryParams = [];
    for (let key in this.state.ingredients) {
      queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(this.state.ingredients[key])}`);
    }
    queryParams.push(`price=${encodeURIComponent(this.calculatePrice())}`);
    const queryString = queryParams.join("&");

    this.props.history.push({
      pathname: "/checkout",
      search: `?${queryString}`
    });
  };

  calculatePrice = () => {
    return 4 + Object.keys(this.state.ingredients).reduce((total, key) => total + this.state.ingredients[key] * INGREDIENT_PRICES[key], 0);
  };

  render() {
    let totalPrice = this.state.ingredients ? this.calculatePrice() : null;
    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients couldn't be loaded!</p> : <Spinner />;

    if (this.state.ingredients) {
      burger = (
        <Fragment>
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

      orderSummary = (
        <OrderSummary
          orderContinued={this.handleContinuePurchase}
          orderCancelled={this.handleCancelPurchase}
          ingredients={this.state.ingredients}
          totalPrice={totalPrice}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Fragment>
        <Modal show={this.state.purchasing} modalClosed={this.handleCancelPurchase}>
          {orderSummary}
        </Modal>
        {burger}
      </Fragment>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
