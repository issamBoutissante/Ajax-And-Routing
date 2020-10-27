import React, { Component } from "react";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
import axios from "axios";

class Blog extends Component {
  state = {
    posts: [],
    selectedId: null,
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({ posts: response.data });
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }
  onSelectedPostHandler = function (id) {
    this.setState({ selectedId: id });
    console.log(this.state.selectedId);
  };
  render() {
    let postsComponent = this.state.posts.slice(0, 4).map((post) => {
      return (
        <Post
          title={post.title}
          author="issam"
          onSelected={this.onSelectedPostHandler.bind(this, post.id)}
          key={post.id}
        />
      );
    });
    return (
      <div>
        <section className="Posts">{postsComponent}</section>
        <section>
          {this.state.selectedId !== null ? (
            <FullPost id={this.state.selectedId} />
          ) : null}
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
