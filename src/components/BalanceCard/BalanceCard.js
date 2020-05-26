import React from "react";
import classes from "./BalanceCard.module.css";

const balanceCard = (props) => {
  const cardData = [
    props.card_name,
    props.card_balance
  ];

  return (
    <div className={[classes.BalanceCard]}>
      {cardData.map((data) => (
        <p>{data}</p>
      ))}
      {/*<i className="fa tooltip ">
        &#xf05a;
        <ToolTip>
          Balance in your donor-advised fund after the previous day’s trading
          cycle is completed
        </ToolTip>
      </i>*/}
    </div>
  );
};

export default balanceCard;
