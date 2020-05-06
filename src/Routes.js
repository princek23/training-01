import React, { Component } from "react";
import history from "./history";
import { Router, Switch, Route } from "react-router-dom";
import NeedAssistance from "./components/NeedAssistance/NeedAssistance";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route
            path="/NeedAssistance"
            component={NeedAssistance}
          ></Route>
        </Switch>
      </Router>
    );
  }
}
