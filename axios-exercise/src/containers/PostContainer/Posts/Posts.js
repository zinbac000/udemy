import React, { useState, useEffect, Fragment } from "react";
import { Route } from "react-router-dom";

import Post from "../../../components/Post/Post";
import PostDetail from "../PostDetail/PostDetail";

import axios from "axios";
import classes from "./Posts.module.css";

export default function Posts(props) {
  const [posts, setPosts] = useState(null);
  const fetchPosts = async () => {
    const fetchedPosts = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data.slice(0, 4).map((post) => ({ ...post, author: "James Bond" })));
    setPosts(fetchedPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePostSelected = (id) => {
    props.history.push("/" + id);
  };

  let postList;

  if (!posts) {
    postList = <p style={{ textAlign: "center", width: "100%" }}>Loading posts...</p>;
  } else {
    postList = posts.map((post) => (
      <div key={post.id} className={classes.Posts__PostWrapper}>
        <Post id={post.id} author={post.author} title={post.title} body={post.body} clicked={handlePostSelected} />
      </div>
    ));
  }

  return (
    <Fragment>
      <section className={[classes.Posts, "section"].join(" ")} style={{ paddingBottom: "15px" }}>
        <h1 className="section-title">Posts</h1>
        <div className={classes.Posts__List}>{postList}</div>
      </section>
      <Route path={props.match.url + ":id"} component={PostDetail} />
    </Fragment>
  );
}
