import React from "react";
import style from "styled-components";
import FundName from "../FundName/FundName";

const AccountTitleTag = style.div`
text-align:left;
`;

const Title = style.h3`
font-family: BerkeleyStd;
    font-size: 42px;
    line-height: 1.14;
    letter-spacing: 0.5px;
    color: #022737;
    margin:0;
    padding: 45px 0 0 0px;
`;


const Balance = style.p`
font-size: 16px;
line-height: 1.5;
letter-spacing: normal;
color: #505050;
margin:0;
// font-family: HelveticaNeue;
    // padding: 50px 0 15px;
`;

const AccountTitle = (data) => {

  return (
    <AccountTitleTag>
      <Title>Account Overview</Title>
      <FundName />
      <Balance>Balance as of 12/12/2012</Balance>
    </AccountTitleTag>
  );
};

export default AccountTitle;
