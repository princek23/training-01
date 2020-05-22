import style from 'styled-components';

export const styleDiv = style.div`
width:50%;
background-color:#eee;
margin:20px 25px;
border:1px solid blanchedalmond;
`;

export const styleP = style.p`
margin:5px;
`;
export const styleH1 = style.h1`
margin:50px;
font-size:36px;
color:#022737;
`;

export const styleButton = style.button`
border: ${props => props.invert ? '1px solid #d4d4d4' : 'none'};
 background-color: ${props => props.invert ? 'white' : '#006778'};
    height:50px;
margin:0px 0px 0 50px;
    padding:15px 35px;
    flex: 1;
    // font-family: 'HelveticaNeue';
    color: ${props => props.invert ? '#006778' : 'white'};
    font-size: 16px;
  font-weight: bold;
cursor:pointer;
  font-stretch: condensed;
  letter-spacing: 0.5px;
//   margin-left:50px
`;