import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom";

// import {Categories}  from '../data';
import {mobile} from '../reponsive'
const Containered = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
display: flex;
transition: all 0.5 ease;
/* opacity: 0.6; */
/* &:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
    opacity: 1;
} */

`;
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
padding: 2px;
display: block;


${mobile ({height: "30vh"})}
`;
const Info = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
align-items:center;
justify-content: center;
flex-direction: column;

`;
const Title = styled.h1`
color: white;
margin-bottom: 20px;
`;
const Button = styled.button`
border: none;
padding: 10px;
background-color:white;
color: gray;
cursor: pointer;
font-weight: 600;
transition: all 0.5 ease;

&:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
}
`;
const CategoriesItem = ({item}) => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? 'black' : 'black',
      textDecoration: isActive ? "none" : "none"
    };
  };
  return (
    <Containered>
      <Image src={item.img}/>
      <Info>
        <Title>
          {item.title}
        </Title>
        <Button>
        <NavLink style={navLinkStyles} to="/productlist">
        SHOW NOW
      </NavLink> 
          
          
          </Button>
      </Info>
    </Containered>
  )
}

export default CategoriesItem
