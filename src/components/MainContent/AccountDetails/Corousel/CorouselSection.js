import React from 'react';
import styled from 'styled-components';


const CorouselData = styled.div`
    display:flex;
    /* background-color:transparent; */
    position: relative;
    z-index:1;
    width:300%;
    transform:translateX(${props => props.trns || '0%'});
    transition:transform 1s ease-in;
    
`;

const CorouselItem = styled.div`
    display:flex;
    padding:28px 72px;
    /* background-color:transparent; */
    & div:first-child {
        margin-right:118px;
        & p:first-child{
        color:#505050;
        font-size:14px;
        line-height: 1.43;
        margin-bottom:6px
    } 
    & p:last-child{
        font-size: 24px;
  font-weight: 500;
  
  line-height: 1.25;
  letter-spacing: 0.5px;
       color:#022737;
    }
    }
    & div:last-of-type {
        /* background-color:transparent; */
        & p:first-child{
        color:#505050;
        font-family:HelvetivaNeue;
        font-size:16px;
        line-height: 1.5;
        margin:30px 0 20px 0;
    } 
    & p:last-of-type{
        font-size: 16px;
        color:#006778;
  font-weight: bold;
  letter-spacing: 0.5px;

    }
    }
    @media (max-width:1024px) {
        flex-direction:column;
        /* height:200px; */
        & P{

            font-size:14px;
        }
    }

     @media (max-width:320px) {
          & div:first-child {
        margin-right:0px;
          }
         & div{
             width:130% !important;
         }
     }
   
`;

const CorouselSection = (props) => {

    return (
        <CorouselData trns={props.trns}>
            {console.log(props.trns, 'wdw')}
            {props.data.map(item => (
                <CorouselItem key={item.id}>
                    <div>
                        <p>{item.Title}</p>
                        <p>{item.Heading}</p>
                    </div>
                    <div>
                        <p>{item.Description}</p>
                        <p>{item.Link}</p>
                    </div>

                </CorouselItem>
            ))}
        </CorouselData>



    );
}




export default CorouselSection;