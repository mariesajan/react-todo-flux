import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRedirect, browserHistory } from "react-router";
import Favorites from "./components/favorites";
import Layout from "./components/layout";
import Settings from "./components/settings";
import Todos from "./components/todos";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history= {browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRedirect to="todos" />
      <Route path="todos" component={Todos} />
      <Route path="favorites" component={Favorites} />
      <Route path="settings" component={Settings} />
    </Route>
  </Router>
  ,app
)
