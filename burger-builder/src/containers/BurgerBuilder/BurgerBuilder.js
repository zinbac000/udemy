import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    loading: false
  };

  componentDidMount() {
    this.props.fetchIngredients();
  }

  updatePurChaseState = () => {
    return Object.keys(this.props.ingredients).some((key) => this.props.ingredients[key] > 0);
  };

  handlePurchase = () => {
    if (this.props.isAuthenticated) {
      this.setState({
        purchasing: true
      });
      this.props.initPurchase();
    } else {
      this.props.onSetAuthRedirectPath("/checkout");
      this.props.history.push("/auth");
    }
  };

  handleCancelPurchase = () => {
    this.setState({
      purchasing: false
    });
  };

  handleContinuePurchase = () => {
    this.props.history.push("/checkout");
  };

  render() {
    let orderSummary = null;
    let burger = this.props.error ? <p>Ingredients couldn't be loaded!</p> : <Spinner />;

    if (this.props.ingredients) {
      burger = (
        <Fragment>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            ingredients={this.props.ingredients}
            modifyQuantity={this.props.modifyIngredients}
            price={this.props.totalPrice}
            purchasable={this.updatePurChaseState()}
            ordered={this.handlePurchase}
            isAuthenticated={this.props.isAuthenticated}
          />
        </Fragment>
      );

      orderSummary = (
        <OrderSummary
          orderContinued={this.handleContinuePurchase}
          orderCancelled={this.handleCancelPurchase}
          ingredients={this.props.ingredients}
          totalPrice={this.props.totalPrice}
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

const mapStateToProps = (state) => ({
  ingredients: state.burgerBuilderReducer.ingredients,
  totalPrice: state.burgerBuilderReducer.totalPrice,
  error: state.burgerBuilderReducer.error,
  isAuthenticated: state.authReducer.idToken !== null
});

const mapDispatchToProps = (dispatch) => ({
  modifyIngredients: (ingredientType, increment) => dispatch(actions.modifyIngredients(ingredientType, increment)),
  fetchIngredients: () => dispatch(actions.fetchIngredients()),
  initPurchase: () => dispatch(actions.initPurchase()),
  onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
