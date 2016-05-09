import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRedirect, browserHistory } from "react-router";
import Favorites from "./components/favorites";
import Layout from "./components/layout";
import Settings from "./components/settings";
import Todos from "./components/todos";

const app = document.getElementById('app');

class TodosNew extends React.Component{
  render(){
    return (
      <Todos {...this.props} />  // To prevent the prop validation errors in Todos component if directly given in Route
    );
  }
}

ReactDOM.render(
  <Router history= {browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRedirect to="todos" />
      <Route path="todos" component={TodosNew} />
      <Route path="favorites" component={Favorites} />
      <Route path="settings" component={Settings} />
    </Route>
  </Router>
  ,app
)
