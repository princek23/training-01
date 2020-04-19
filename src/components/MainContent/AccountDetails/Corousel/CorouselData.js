import React from 'react';
import styled from 'styled-components';

import LeftArrow from "../../../../assets/images/circle-arrow-l.png";
import RightArrow from '../../../../assets/images/circle-arrow-r.png';
import LeafImg from '../../../../assets/images/vc-logo-cmyk-leaf-01.png';

import CorouselSectionData from './CorouselSection';


const corouselData = [
    {
        id: 0,
        Title: 'Featured',
        Heading: 'Learn how to value your contributions',
        Description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolore magna ali.',
        Link: 'Learn More-1'
    },
    {
        id: 1,
        Title: 'Featured',
        Heading: 'Learn how to value your contributions',
        Description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolore magna ali.',
        Link: 'Learn More-2'
    },
    {
        id: 2,
        Title: 'Featured',
        Heading: 'Learn how to value your contributions',
        Description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolore magna ali.',
        Link: 'Learn More-3'
    }
]

const MainBottomWrap = styled.div`
    background:white;
    margin-top:30px;
    width:100%;
    height:200px;
    position: relative;
    overflow:hidden;
      & > img {
       position:absolute;
        
        height:100%;
        right:0;
        top:0;

    }
     @media (max-width:1024px) {
        height:300px;
         & > img {
      
        height:50%;
        right:0;
        top:50%;

    }
    }
     @media (max-width:512px) {
         width:90%;
        height:400px;
        
    }
    
`;

const Controls = styled.div`
    height:100%;
    padding:20px;
    position:relative;
    z-index:10;
    /* background-color:transparent; */
    display:flex;
    justify-content:space-between;
    align-items:center;
  
    &+ div{
        position:absolute;
        top:0;
        left:0;
    
    }
   
     
`;

const Img = styled.img`
cursor:${props => props.trns === '-66.66%' ? 'not-allowed' : "pointer"};
`;
const LeftImg = styled.img`
cursor:${props => (props.trns === '0%') ? 'not-allowed' : ""};
`;

class Corousel extends React.Component {
    state = {
        trns: '0%',
    }



    sliderFn = () => {
        console.log(this.state, 'right');

        switch (this.state.trns) {
            case '0%':
                this.setState({
                    trns: '-33.33%',

                })

                break;

            case '-33.33%':
                this.setState({
                    trns: '-66.66%',

                })
                break;
            case '-66.66%':
                // this.setState({

                // })
                break;
            default:
                this.setState({
                    trns: '0%'
                })
        }

    }

    sliderLeftFn = () => {
        console.log(this.state, 'left');
        switch (this.state.trns) {
            case '0%':
                // this.setState({
                //     
                // })

                break;

            case '-33.33%':
                this.setState({
                    trns: '0%',

                })
                break;
            case '-66.66%':
                this.setState({
                    trns: '-33.33%'
                })
                break;
            default:
                this.setState({
                    trns: '0%'
                })
        }

    }


    render() {
        return (
            <MainBottomWrap className='MaxWidth' >
                <Controls>
                    <LeftImg onClick={this.sliderLeftFn} src={LeftArrow} alt='left' trns={this.state.trns}></LeftImg>


                    <Img onClick={this.sliderFn} src={RightArrow} alt='right' trns={this.state.trns}></Img>


                </Controls>
                <CorouselSectionData data={corouselData} trns={this.state.trns} />

                <img src={LeafImg} alt='leaf-img'></img>
            </MainBottomWrap>
        );
    }
}

export default Corousel;