import React from 'react';

import classes from './OtherAccount.module.css';
import Button from '../../../Button/Button';


const buttonData = ['CONTRIBUTION', 'GRANT', 'EXCHANGE', 'MANAGE YOUR ACCOUNT'];
const mainMiddle = () => (
    <div className={[classes.MainMiddle, 'MaxWidth'].join(' ')}>

        {buttonData.map((data, id) => <Button invert={id === 3}> {data}</Button>)}
    </div>
);

export default mainMiddle;