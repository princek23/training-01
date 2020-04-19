import React from "react";
// import {breadcrumbdata} from "../../../datavalues/breadcrumbdata";
import style from "styled-components";

const BreadcrumbTag = style.p`
margin-top: 37px;
    color: #505050;
    font-size: 14px;
    line-height: 1.43;
    margin-left: 40px;

     @media (max-width:1024px){
         .Breadcrumb{
          width: 90%;
         }
    `;

const breadcrumb = (props) => <BreadcrumbTag>{props.path}</BreadcrumbTag>;

export default breadcrumb;
