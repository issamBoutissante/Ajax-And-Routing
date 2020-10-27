import React, { Component } from "react";

import Blog from "./containers/Blog/Blog";
import Main from "./components/pages/main";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <Blog />
      // </div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }
}

export default App;
