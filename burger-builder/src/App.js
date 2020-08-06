import React, { Suspense, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "./store/actions/index";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Spinner from "./components/UI/Spinner/Spinner";
import Logout from "./components/Auth/Logout/Logout";
const Checkout = React.lazy(() => import("./containers/Checkout/Checkout"));
const Orders = React.lazy(() => import("./containers/Orders/Orders"));
const Auth = React.lazy(() => import("./containers/Auth/Auth"));

function App(props) {
  useEffect(() => {
    props.onCheckAuthStateOnLoad();
  }, []);

  let routes = (
    <Switch>
      <Route exact path="/" component={BurgerBuilder} />
      <Route path="/auth" component={Auth} />
      <Redirect to="/" />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route exact path="/" component={BurgerBuilder} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/auth" component={Auth} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
  }

  if (props.checkingState) {
    routes = null;
  }

  return (
    <Suspense fallback={<Spinner />}>
      <Layout>{routes}</Layout>
    </Suspense>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.idToken !== null,
  checkingState: state.authReducer.checkingState
});

const mapDispatchToProps = (dispatch) => ({
  onCheckAuthStateOnLoad: () => dispatch(actions.authCheckState())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
