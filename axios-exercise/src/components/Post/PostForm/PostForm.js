import React, { Component } from "react";

import classes from "./PostForm.module.css";

export default class PostForm extends Component {
  state = {
    author: "James",
    title: "",
    body: ""
  };

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    });
  };

  handleContentChange = (event) => {
    this.setState({
      body: event.target.value
    });
  };

  handleAuthorChange = (event) => {
    this.setState({
      author: event.target.value
    });
  };

  render() {
    return (
      <div className="section" style={{ marginTop: "15px" }}>
        <h1 className="section-title">Add a post</h1>
        <div style={{ padding: "15px" }}>
          <form>
            <div className={classes.FormGroup}>
              <label htmlFor="title">Title</label>
              <input type="text" id="title" className={classes.FormControl} value={this.state.title} onChange={this.handleTitleChange} />
            </div>
            <div className={classes.FormGroup}>
              <label htmlFor="content">Content</label>
              <textarea id="content" className={classes.FormControl} value={this.state.body} onChange={this.handleContentChange} />
            </div>
            <div className={classes.FormGroup}>
              <label htmlFor="author">Author</label>
              <select className={classes.FormControl} id="author" value={this.state.author} onChange={this.handleAuthorChange}>
                <option value="Max">Max</option>
                <option value="James">James</option>
              </select>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
