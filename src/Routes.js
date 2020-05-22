import React from "react";
import history from "./history";
import { Router, Switch, Route } from "react-router-dom";
import NeedAssistance from "./components/NeedAssistance/NeedAssistance";
import Account from "./Account";

function Routes() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/NeedAssistance" exact component={NeedAssistance}></Route>
          <Route path="/" component={Account}></Route>
        </Switch>
      </Router>
    );
  }

export default Routes;
