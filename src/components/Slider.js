import React, { useState } from 'react'
import styled from 'styled-components'
import {ArrowRightOutlined,ArrowLeftOutlined} from '@mui/icons-material'
import {sliderItems} from "../data"
import {mobile} from '../reponsive'
import { NavLink } from "react-router-dom";

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
background-color:coral;
position:relative;
overflow:hidden;
${mobile ({display: "none"})}
`;
const Arrow = styled.div`
width: 50px;
height:50px;
background-color:#fff7f7;
border-radius: 50%;
display:flex;
align-items:center;
justify-content:center;
position : absolute;
top:0;
bottom:0;
left:${props=> props.direction === "left" && "10px"};
right:${props=> props.direction === "right" && "10px"};

margin: auto;
cursor:pointer;
opacity:0.5;//for transparent the color 
z-index:2;

`;
const Wrapper = styled.div`
height:100%;
display: flex;
transform: translateX(${(props)=>props.slideIndex * -100}vw);
transition: all 1.5s ease;
`;

const Slide = styled.div`
display: flex;
align-items:center;
width: 100vw;
height:100vh;
background-color:#${props=>props.bg};

`;
const ImgContainer = styled.div`
flex:1;
height: 100%;
`;
const Image = styled.img`
height: 100%;
width: 500px;
margin-top:0px;
`;
const InfoContainer = styled.div`
flex:1;
padding:50px;
`;

const Title= styled.h1`
font-size:70px;
`;
const Desc = styled.p`
margin:50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;

`;
const Button = styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;
`;


const Slider = () => {
  const [slideIndex,setSlideIndex] = useState(0);
  const handleClick = (direction) =>{
    if(direction==="left"){
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 4);
    }
    else{
      setSlideIndex(slideIndex < 4 ? slideIndex+1 : 0);
    }
  };
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? 'black' : 'black',
      textDecoration: isActive ? "none" : "none"
    };
  };
  return (
    <Container>
<Arrow direction="left" onClick= {() =>handleClick("left")}>
    <ArrowLeftOutlined/>
</Arrow>
<Wrapper slideIndex={slideIndex}>
  {sliderItems.map(item=>(
       <Slide bg={item.bg} key={item.id} >
       <ImgContainer>
       <Image  src={item.img}/>
       </ImgContainer>
       <InfoContainer>
           <Title>
              {item.title}
           </Title>
           <Desc>
                {item.desc}
           </Desc>
           <NavLink style={navLinkStyles} to="/productlist">
           <Button>
           
           SHOP NOW
      
            </Button>
            </NavLink> 
       </InfoContainer>
       </Slide>
  ))}
    


</Wrapper>

<Arrow direction="right" onClick= {() =>handleClick("right")}>
    <ArrowRightOutlined/>
</Arrow>
    </Container>
  )
}

export default Slider
