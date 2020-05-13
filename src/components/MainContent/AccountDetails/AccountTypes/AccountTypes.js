import React from 'react';

import classes from './AccountTypes.module.css';
import BalaceCard from "../../../BalanceCard/BalanceCard";
import TabView from '../../TabView/TabView';

const cardData = {
    card1: ['Current Balance', '$120,000'],
    card2: ['Available Balance', '$ 30,000', 'VIEW TRANSACTION SUMMARY'],
};

const mainTop = () => (
    <div className={[classes.MainTop, 'MaxWidth'].join(' ')}>
        <div>
            <BalaceCard cardData={cardData.card1} />
            <BalaceCard cardData={cardData.card2}><i className="fa">&#xf061;</i></BalaceCard>
        </div>
        <div>
            <TabView />
        </div>
    </div>
);

export default mainTop;