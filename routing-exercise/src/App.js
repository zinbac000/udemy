import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import NotFound from "./components/NotFound/NotFound";
import Users from "./containers/Users/Users";
import Courses from "./containers/Courses/Courses";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/users" component={Users} />
          <Route path="/courses" component={Courses} />
          <Redirect exact from="/all-courses" to="/courses" />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
