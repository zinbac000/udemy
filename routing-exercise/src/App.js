import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import NotFound from "./components/NotFound/NotFound";

const Users = React.lazy(() => import("./containers/Users/Users"));
const Courses = React.lazy(() => import("./containers/Courses/Courses"));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/users" render={(props) => <Users {...props} />} />
            <Route path="/courses" render={(props) => <Courses {...props} />} />
            <Redirect exact from="/all-courses" to="/courses" />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
