import React from 'react';

import classes from './AccountDetails.module.css';
import AccountTypes from './AccountTypes/AccountTypes';
import OtherAccount from './OtherAccountOption/OtherAccount';
import CorouselData from './Corousel/CorouselData';


const AccountDetails = () => (
    <section className={classes.Main}>
        <AccountTypes />
        <OtherAccount />
        <CorouselData />
    </section>
);

export default AccountDetails;