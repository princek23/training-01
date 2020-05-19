import React from "react";
import classes from "./BalanceCard.module.css";
// import style from "styled-components";

// const ToolTip=style.span`
// position: relative;
//   display: inline-block;

//     visibility: visible;
//     position: absolute;
//     visibility: hidden;

//     visibility: visible;
//     background-color: rgba(0, 103, 120, 0.9);
//     color: white;
//     width: 300.8px;
//     height: 56px;
//     box-shadow: 5px 0 10px 0 rgba(0, 0, 0, 0.1);
//     padding: 20px 0 0 33px;
//     font-size: 14px;
// `;

const balanceCard = (props) => {
  const cardData = [...props.cardData];

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
