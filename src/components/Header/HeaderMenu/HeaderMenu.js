import React from 'react';

import classes from './HeaderMenu.module.css';
import Logo from '../../../assets/images/vcep-logo.png';
// import { Link } from 'react-router-dom';
import history from "../../../history";

const headetMenuData = [
    'ACCOUNT SUMMARY',
    'GRANTS',
    'CONTRIBUTIONS',
    'INVESTMENTS',
    'RESOURCES',
    'MY ACCOUNT',
];

const HeaderMenu = () => (
    <div className={classes.Background}>

        <div className={[classes.HeaderMenu, 'MaxWidth'].join(' ')}>
        <img src={Logo} alt='logo' onClick={() => history.push("/")} />
            <ul>
                {headetMenuData.map(data => <li>{data}</li>)}
            </ul>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
);


export default HeaderMenu;