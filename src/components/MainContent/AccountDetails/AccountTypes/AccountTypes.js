import React, { Component } from 'react';

import classes from './AccountTypes.module.css';
import BalaceCard from "../../../BalanceCard/BalanceCard";
import TabView from '../../TabView/TabView';

// const cardData = {
//     card1: ['Current Balance', '$120,000'],
//     card2: ['Available Balance', '$ 30,000', 'VIEW TRANSACTION SUMMARY'],
// };


class AccountType extends Component{
    state={
        data: {
            currentBalance: '',
            availableBalance: ''
        }
    };

    componentDidMount(){
        fetch("https://demo0923316.mockable.io/balance_cards")
        .then(resp=>resp.json())
        .then(resp=>this.successHanlder(resp))
    }

    successHanlder=(result)=>{
        this.setState({
            data:result.data
        });
    }
    render(){
        return(
            <div className={[classes.MainTop, 'MaxWidth'].join(' ')}>
            <div>
            <BalaceCard card_name="Current Balance" card_balance={this.state.data.currentBalance}/>
            <BalaceCard card_name="Available Balance" card_balance={this.state.data.availableBalance}/>
            </div>
            <div>
                 <TabView />
            </div>
            </div>
        )
    }
}

export default AccountType;