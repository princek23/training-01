import React from 'react';

// import classes from './HeaderBarStyle.module.css';
import emailIcon from '../../../assets/images/email-icon.png';
import userIcon from '../../../assets/images/user-icon.png';
import style from "styled-components";

const HeaderBody = style.div`
background-color: #022737;
`;

const HeaderItem=style.div`
height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Dropdown = style.ul`
list-style: none;
    width: 50%;
    display: flex;
    color: white;
    justify-content: space-between;
    height: 40px;
    align-items: center;
`;

const DropdownList = style.li`
align-self: center;
border-radius: 10.5px;
`;


const headerbarList = [
    <p>Need Assistance?</p>,
    <select>
    <option>A1029807 - John Carson</option>
    <option>A1024507 - John</option>
    <option>A1023207 - Carson</option>
    </select>,
    <img src={emailIcon} alt='msg-img'></img>,
    <img src={userIcon} alt='contact-img'></img>,
];

const headerbar = () => (
    <HeaderBody>
      <HeaderItem>
        <Dropdown>
          {headerbarList.map(item => 
            <DropdownList>{item}</DropdownList>
          )}
        </Dropdown>
      </HeaderItem>
    </HeaderBody>
  );
  
  export default headerbar;