import React from "react";
import PropTypes from "prop-types";

import classes from "./Post.module.css";

export default function Post(props) {
  const { author, title, body } = props.post;
  return (
    <article className={classes.Post} onClick={() => props.clicked(props.post.id)}>
      <h5>{title}</h5>
      <p>{body}</p>
      <span>
        <em>{author}</em>
      </span>
    </article>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  clicked: PropTypes.func
};
