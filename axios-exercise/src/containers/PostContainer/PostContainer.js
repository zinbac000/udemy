import React, { Component, Fragment, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Posts from "./Posts/Posts";
import Header from "../../components/Header/Header";
// import asyncComponent from "../../hoc/asyncComponent/asyncComponent";
const LazyPostForm = React.lazy(() => import("../PostContainer/PostForm/PostForm"));
export default class PostContainer extends Component {
  state = {
    auth: true
  };
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          {this.state.auth ? (
            <Route
              path="/new-post"
              render={() => (
                <Suspense fallback={() => <div>Loading post form...</div>}>
                  <LazyPostForm />
                </Suspense>
              )}
            />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Redirect exact from="/" to="/posts" />
          <Route render={() => <h1>Not found</h1>} />
        </Switch>
      </Fragment>
    );
  }
}
