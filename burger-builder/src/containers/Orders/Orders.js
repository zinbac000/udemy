import React, { Component } from "react";

import classes from "./Orders.module.css";
import Order from "../../components/Order/Order/Order";

import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders(this.props.token, this.props.userId);
  }

  render() {
    let orders = <p>There are no orders yet.</p>;

    if (this.props.error) {
      orders = <p>Orders could not be fetched.</p>;
    }

    if (this.props.orders && this.props.orders.length > 0) {
      orders = this.props.orders.map((order, index) => <Order key={order.id} ingredients={order.ingredients} price={order.price} />);
    }

    if (this.props.fetching) {
      orders = <Spinner />;
    }

    return <section className={classes.Orders}>{orders}</section>;
  }
}

const mapStateToProps = (state) => ({
  orders: state.orderReducer.orders,
  fetching: state.orderReducer.fetching,
  error: state.orderReducer.error,
  token: state.authReducer.idToken,
  userId: state.authReducer.userId
});

const mapDispatchToProps = {
  fetchOrders: actions.fetchOrders
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
