import React, { Component } from "react";
import AccountDetails from "./components/MainContent/AccountDetails/AccountDetails";
import AccountOverview from "./components/MainContent/AccountOverview/AccountOverview";


export default class Account extends Component {
  render() {
    return (
      <>
      <AccountOverview />
      <AccountDetails />
      </>
    );
  }
}
