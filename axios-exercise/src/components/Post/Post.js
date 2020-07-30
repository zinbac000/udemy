import React from "react";

import classes from "./Post.module.css";

export default function Post({ id, author, title, body, clicked }) {
  return (
    <article className={classes.Post} onClick={() => clicked(id)}>
      <h5>{title}</h5>
      <p>{body}</p>
      <span>
        <em>{author}</em>
      </span>
    </article>
  );
}
