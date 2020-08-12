import React, { Component, Suspense } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Users from "./containers/Users/Users";
const Pizza = React.lazy(() => import("./containers/Pizza/Pizza"));

class App extends Component {
  render() {
    return (
      <Suspense fallback={<h1>Loading...</h1>}>
        <div>
          <Link to="/">Users</Link>
          <Link to="/pizza">Pizza</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route path="/pizza" component={Pizza} />
        </Switch>
      </Suspense>
    );
  }
}

export default App;
