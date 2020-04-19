import React, { Component } from "react";
import AccountTitle from "./AccountTitle/AccountTitle";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import FundName from "./FundName/FundName";
import style from "styled-components";

const AccountTag=style.div`
background:#ffffff;
    padding:0 140px 50px;
    `;

class AccountTitleView extends Component{
    render(){
        return(
            <AccountTag>
            <Breadcrumb path='Home   >   Account overview'/>
            <AccountTitle/>
            <FundName data='The Church Fund - A1050919'/>
            <Breadcrumb/>
            </AccountTag>
        )
    }
}

export default AccountTitleView;