import React, { Component } from "react";
import Header from "../Header/Header";
// import Routes from "../../Routes";
// import {connect} from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import AccountOverview from "../MainContent/AccountOverview/AccountOverview";
import AccountDetails from "../MainContent/AccountDetails/AccountDetails";

export default class homepage extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <AccountOverview />
          <AccountDetails />
        </BrowserRouter>
      </div>
    );
  }
}
