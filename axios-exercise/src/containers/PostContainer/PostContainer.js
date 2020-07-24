import React, { Component, Fragment } from "react";
import axios from "axios";

import Posts from "../../components/Post/Posts/Posts";
import PostForm from "../../components/Post/PostForm/PostForm";
import PostDetail from "../../components/Post/PostDetail/PostDetail";
export default class PostContainer extends Component {
  state = {
    posts: [],
    selectedPostId: null
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data.slice(0, 4).map((post) => ({ ...post, author: "James Bond" })))
      .then((posts) => {
        this.setState({
          posts: posts
        });
      });
  }

  handleSelectPost = (postId) => {
    this.setState({
      selectedPostId: postId
    });
  };

  render() {
    return (
      <Fragment>
        <Posts posts={this.state.posts} postSelected={this.handleSelectPost} />
        <PostDetail postId={this.state.selectedPostId} />
        <PostForm />
      </Fragment>
    );
  }
}
