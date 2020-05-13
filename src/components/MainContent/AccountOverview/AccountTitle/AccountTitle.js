import React from "react";
import style from "styled-components";

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
    padding: 45px 0 0 40px;
`;


const Balance = style.p`
font-family: HelveticaNeue;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: normal;
    color: #505050;
    margin:0;
    padding: 15px 0 0 40px;
`;

const AccountTitle = (data) => {

  return (
    <AccountTitleTag>
      <Title>Account Overview</Title>
      <Balance>Balance as of 12/12/2012</Balance>
    </AccountTitleTag>
  );
};

export default AccountTitle;
