import React, { Component } from "react";
import history from "./history";
import { Router, Switch, Route } from "react-router-dom";
import NeedAssistance from "./components/NeedAssistance/NeedAssistance";
import Account from "./Account";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route
            path="/NeedAssistance"
            exact
            component={NeedAssistance}
          ></Route>
          <Route path="/" exact component={Account}></Route>
        </Switch>
      </Router>
    );
  }
}
