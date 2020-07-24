import React from "react";
import PropTypes from "prop-types";

import Post from "../Post";

import classes from "./Posts.module.css";

export default function Posts(props) {
  const posts = props.posts.map((post) => (
    <div key={post.id} className={classes.Posts__PostWrapper}>
      <Post post={post} clicked={props.postSelected} />
    </div>
  ));
  return (
    <section className={[classes.Posts, "section"].join(" ")} style={{ paddingBottom: "15px" }}>
      <h1 className="section-title">Posts</h1>
      <div className={classes.Posts__List}>{posts}</div>
    </section>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  postSelected: PropTypes.func.isRequired
};
