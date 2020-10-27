import React from "react";
import About from "./about";
import Advice from "./advice";
import { Route, Link, Switch } from "react-router-dom";
import ShowNumber from "./showNumber";

const main = (props) => {
  return (
    <section>
      <h1>I'm the main page</h1>
      <h3>Click one of those buttons</h3>
      <button>
        <Link to="/about">About</Link>
      </button>
      <button>
        <Link to="/advice">Advice</Link>
      </button>
      <button>
        <Link to="/300 millions">Show Number</Link>
      </button>
      <Switch>
        <Route path={"/about"} exact component={About} />
        <Route path={"/advice"} exact component={Advice} />
        <Route path={"/:number"} exact component={ShowNumber} />
      </Switch>
    </section>
  );
};

export default main;
