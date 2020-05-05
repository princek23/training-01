import React from "react";
import Header from "./components/Header/Header";
import AccountDetails from "./components/MainContent/AccountDetails/AccountDetails";
import AccountOverview from "./components/MainContent/AccountOverview/AccountOverview";
import "./App.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NeedAssistance from "./components/NeedAssistance/NeedAssistance";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route
            path="/NeedAssistance"
            exact
            component={NeedAssistance}
          ></Route>
        </Switch>
      </BrowserRouter>
      <Header />
      <AccountOverview />
      <AccountDetails />
    </React.Fragment>
  );
}

export default App;
