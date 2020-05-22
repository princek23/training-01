import React from 'react';

import classes from './OtherAccount.module.css';
import Button from '../../../Button/Button';

import { Link } from 'react-router-dom';


const buttonData = ['CONTRIBUTION', 'GRANT', 'EXCHANGE'];
const mainMiddle = () => (
    <div className={[classes.MainMiddle, 'MaxWidth'].join(' ')}>
        {buttonData.map((data, id) => <Button key={data}> {data}</Button>)}

        <Button><Link to='/report'>Manage your account &nbsp;&nbsp;</Link></Button>
    </div>
);

export default mainMiddle;