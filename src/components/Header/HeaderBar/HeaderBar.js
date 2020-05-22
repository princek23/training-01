import React from "react";
import emailIcon from "../../../assets/images/email-icon.png";
import userIcon from "../../../assets/images/user-icon.png";
import classes from "./HeaderBar.module.css";
import history from "../../../history";
// import NeedAssistance from "../../NeedAssistance/NeedAssistance";
// import {connect} from "react-redux"
import {Link} from "react-router-dom";


const Header =(props)=>(
      <div className={classes.headerbarBackgroud}>
        <div className={[classes.headerItem, "MaxWidth"].join(" ")}>
          <ul>
            <li>
            <Link to="/NeedAssistance">
<p onClick={() => history.push("/NeedAssistance")}>NeedAssistance?
</p>
</Link>
            </li>
            <li>
              <select name="" id="">
                <option value="A1029087 - John Carson">
                A1029087 - John Carson
                </option>
                <option value="A1026787 - John">
                A1026787 - John
                </option>
                <option value="A1034087 - Carson">
                A1034087 - Carson
                </option>
              </select>
            </li>
            <li>
              <img src={emailIcon} alt="msg-img"></img>
            </li>
            <li>
              <img src={userIcon} alt="contact-img"></img>
            </li>
          </ul>
        </div>
      </div>
    );

export default Header;
