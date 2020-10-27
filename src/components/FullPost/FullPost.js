import React, { Component } from "react";
import "./FullPost.css";
import axios from "axios";

class FullPost extends Component {
  state = {
    post: null,
  };
  componentDidUpdate() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts" + this.props.id)
      .then((response) => {
        if (response.data.id === this.state.post.id) return;
        this.setState({ post: response.data });
      });
  }
  deletePostHandler = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts" + this.props.id)
      .then((res) => console.log(res));
  };
  render() {
    let post = (
      <h1 style={{ textAlign: "center" }}>Someting Went Wrong !!! </h1>
    );
    if (this.state.post !== null)
      post = (
        <div className="FullPost">
          <h1>{this.state.post.title}</h1>
          <p>{this.state.post.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );

    return post;
  }
}

export default FullPost;
