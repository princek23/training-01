
import React from "react";
import style from "styled-components";

const FundNameTag=style.section`
padding-bottom: 40px;
`;

const FundName=style.p`
color: #022737;
    font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
`;

const fundInfo=(props)=>{
    return(
    <FundNameTag>
        <FundName>{props.data}</FundName>
    </FundNameTag>
    )
}

export default fundInfo;