import React, { Component } from "react";
import emailIcon from "../../../assets/images/email-icon.png";
import userIcon from "../../../assets/images/user-icon.png";
import classes from "./HeaderBar.module.css";
import history from "../../../history";
import NeedAssistance from "../../NeedAssistance/NeedAssistance";
import { Link } from "react-router-dom";
import {Drawer, Dropdown} from "antd"
import {connect} from "react-redux"
import DropdownList from "../HeaderBar/dropdown"


const Header =(props)=>(
      <div className={classes.headerbarBackgroud}>
        <div className={[classes.headerItem, "MaxWidth"].join(" ")}>
          <ul>
          <li> <p onClick={props.drawerHandler}>Need Assistance?</p></li>
            <li><DropdownList/></li>
            <li>
              <img src={emailIcon} alt="msg-img"></img>
            </li>
            <li>
              <img src={userIcon} alt="contact-img"></img>
            </li>
          </ul>
          <Drawer onClose={props.drawerHandler}
                visible={props.drawer} destroyOnClose>
                <NeedAssistance />
            </Drawer>
        </div>
      </div>
    );

    const mapStateToProps = state => {
      return {
          drawer: state.drawer,
      };
  }
  const mapDispatchToProps = dispatch => {
      return {
          drawerHandler: () => dispatch({ type: 'Drawer' }),
      };
  }

export default connect(mapStateToProps,mapDispatchToProps)(Header);
