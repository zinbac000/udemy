import React, { Component } from "react";

import classes from "./Orders.module.css";
import Order from "../../components/Order/Order/Order";

import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";

export default class Orders extends Component {
  state = {
    orders: null
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => res.data)
      .then((orders) => {
        this.setState({
          orders: Object.keys(orders).map((key) => ({ ...orders[key], id: key }))
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let orders = <Spinner />;
    if (this.state.orders) {
      orders = this.state.orders.map((order, index) => <Order key={order.id} ingredients={order.ingredients} price={order.price} />);
    }
    return <section className={classes.Orders}>{orders}</section>;
  }
}
