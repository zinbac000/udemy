import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Spinner from "./components/UI/Spinner/Spinner";
import Orders from "./containers/Orders/Orders";
const Checkout = React.lazy(() => import("./containers/Checkout/Checkout"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Layout>
        <Switch>
          <Route exact path="/" component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route render={() => <h1 style={{ textAlign: "center" }}>Page not found!</h1>} />
        </Switch>
      </Layout>
    </Suspense>
  );
}

export default App;
