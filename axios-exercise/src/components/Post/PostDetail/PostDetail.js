import React, { useEffect, useState } from "react";
import axios from "axios";

import classes from "./PostDetail.module.css";

function PostDetail(props) {
  let { postId } = props;
  let postContent = (
    <div className={classes.PostDetail__Content} style={{ textAlign: "center" }}>
      Please choose a post.
    </div>
  );
  const [loadedPost, setLoadedPost] = useState(null);
  useEffect(() => {
    console.log("[PostDetail] load post...");
    if (postId) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/" + postId)
        .then((res) => res.data)
        .then((post) => setLoadedPost({ ...post, author: "James Bond" }));
    }
  }, [postId]);

  if (postId && (!loadedPost || loadedPost.id !== postId)) {
    postContent = (
      <div className={classes.PostDetail__Content} style={{ textAlign: "center" }}>
        Loading...
      </div>
    );
  }
  if (loadedPost && loadedPost.id === postId) {
    postContent = (
      <div className={classes.PostDetail__Content}>
        <div className={classes.PostDetail__User}>
          <img src="https://picsum.photos/64" alt="user" />
          <span>{loadedPost.author}</span>
        </div>
        <h3>{loadedPost.title}</h3>
        <p>{loadedPost.body}</p>
      </div>
    );
  }
  return (
    <div className={[classes.PostDetail, "section"].join(" ")}>
      <h1 className="section-title">Post Detail</h1>
      {postContent}
    </div>
  );
}

const areEqual = (prevProps, nextProps) => prevProps.postId === nextProps.postId;

export default React.memo(PostDetail, areEqual);
