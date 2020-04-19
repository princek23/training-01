import React from 'react';

import classes from './HeaderMenu.module.css';
import Logo from '../../../assets/images/vcep-logo.png';

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
            <img src={Logo} alt='logo' />
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