import React, { Component } from "react";
import Header from "../Header/Header";
import Routes from "../../Routes";
// import {connect} from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import Account from "../../Account";



export default class homepage extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Routes/>
        </BrowserRouter>
      </div>
    );
  }
}
