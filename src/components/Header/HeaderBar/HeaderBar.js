import React, { Component } from "react";
import emailIcon from "../../../assets/images/email-icon.png";
import userIcon from "../../../assets/images/user-icon.png";
import "./HeaderBar.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NeedAssistance from "../../NeedAssistance/NeedAssistance";
import {Link} from "react-router-dom";

class Header extends Component {
  render() {
    return (
        <BrowserRouter>
      <div className="header-backgroud">
        <p>
        {/*<Link to="/NeedAssistance">NeedAssistance</Link>
        <Switch>
    <Route path="/NeedAssistance" exact component={NeedAssistance}></Route></Switch>*/}
        </p>
        <select name="" id="">
          <option value="A1029087 - John Carson Ec…">
            A1029087 - John Carson Ec…
          </option>
          <option value="A1029087 - John Carson Ec…">
            A1029087 - John Carson Ec…
          </option>
          <option value="A1029087 - John Carson Ec…">
            A1029087 - John Carson Ec…
          </option>
        </select>
        <img src={emailIcon} alt="msg-img"></img>
        <img src={userIcon} alt="contact-img"></img>
      </div>
      </BrowserRouter>
    );
  }
}

export default Header;
