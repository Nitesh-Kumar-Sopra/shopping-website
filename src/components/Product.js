import React from 'react'
import styled from 'styled-components'
import {ShoppingCartOutlined,Search,FavoriteBorder} from '@mui/icons-material'
import { NavLink } from "react-router-dom";

const Info = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color:rgba(0,0,0,0.2) ;
z-index: 3;
align-items: center;
display: flex;
justify-content: center;
opacity: 0;
transition: all 0.5 ease;
cursor: pointer;
`;

const Container = styled.div`
flex:1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: whitesmoke;
position: relative;

&:hover ${Info}{
opacity: 1;
}
`;

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: rgba;
position: absolute;
`;
const Image = styled.img`
height: 80%;
width: 80%;
z-index: 2;

`;

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5 ease;

&:hover{
    background-color: #e9f5f5;
    transform: scale(1.2);
}
`;

const Product = ({item}) => {

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? 'black' : 'black',
      textDecoration: isActive ? "none" : "none"
    };
  };
  return (
    <Container>
      <Circle/>
      <Image src = {item.img}/>
      <Info>
        <Icon>
        <NavLink style={navLinkStyles} to="/cart">
        <ShoppingCartOutlined/>
      </NavLink>
        
        </Icon>
        <Icon>
        <NavLink style={navLinkStyles} to="/productsingle">
        <Search/>
      </NavLink> 
             
        </Icon>
        <Icon>
        <NavLink style={navLinkStyles} to="/productsingle">
        <FavoriteBorder/>
      </NavLink>
            
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
