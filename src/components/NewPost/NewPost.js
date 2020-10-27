import React, { Component } from "react";

import "./NewPost.css";
import axios from "axios";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max",
  };
  addNewPost = () => {
    let newPost = {
      title: this.state.title,
      content: this.state.content,
      author: this.state.author,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", newPost)
      .then((res) => {
        console.log(res);
      });
  };

  render() {
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={this.addNewPost}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
