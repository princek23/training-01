import React, { Component } from "react";
import emailIcon from "../../../assets/images/email-icon.png";
import userIcon from "../../../assets/images/user-icon.png";
import "./HeaderBar.css";
import history from "../../../history";

// import {Link} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header-backgroud">
        <p onClick={() => history.push("/NeedAssistance")}>NeedAssistance
        </p>
        {/*<a href="/NeedAssistance" target="_blank">NeedAssistance</a>*/}
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
    );
  }
}

export default Header;
