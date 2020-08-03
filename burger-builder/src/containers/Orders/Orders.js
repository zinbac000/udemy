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
    this.props.fetchOrders();
  }

  render() {
    let orders = <Spinner />;
    if (this.props.orders) {
      orders = this.props.orders.map((order, index) => <Order key={order.id} ingredients={order.ingredients} price={order.price} />);
    }
    return <section className={classes.Orders}>{orders}</section>;
  }
}

const mapStateToProps = (state) => ({
  orders: state.orderReducer.orders
});

const mapDispatchToProps = {
  fetchOrders: actions.fetchOrders
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
