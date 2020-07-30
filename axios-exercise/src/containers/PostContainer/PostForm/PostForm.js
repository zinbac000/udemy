import React, { Component, Fragment } from "react";
import axios from "axios";

import classes from "./PostForm.module.css";
import { Redirect } from "react-router-dom";

export default class PostForm extends Component {
  state = {
    author: "James",
    title: "",
    body: "",
    submitted: false
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleCreatePost = (event) => {
    event.preventDefault();
    const { author, title, body } = this.state;
    axios.post("https://jsonplaceholder.typicode.com/posts", { author, title, body }).then((res) => this.setState({ submitted: true }));
  };

  render() {
    let redirect = null;
    if (this.state.submitted) {
      redirect = <Redirect to="/posts" />;
    }
    return (
      <Fragment>
        {redirect}
        <section className="section" style={{ marginTop: "15px" }}>
          <h1 className="section-title">Add a post</h1>
          <div style={{ padding: "15px" }}>
            <form>
              <div className={classes.FormGroup}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" className={classes.FormControl} value={this.state.title} onChange={this.handleInputChange} />
              </div>
              <div className={classes.FormGroup}>
                <label htmlFor="body">Content</label>
                <textarea rows={20} id="body" className={classes.FormControl} value={this.state.body} onChange={this.handleInputChange} />
              </div>
              <div className={classes.FormGroup}>
                <label htmlFor="author">Author</label>
                <select className={classes.FormControl} id="author" value={this.state.author} onChange={this.handleInputChange}>
                  <option value="Max">Max</option>
                  <option value="James">James</option>
                </select>
              </div>
              <button onClick={this.handleCreatePost}>Submit</button>
            </form>
          </div>
        </section>
      </Fragment>
    );
  }
}
