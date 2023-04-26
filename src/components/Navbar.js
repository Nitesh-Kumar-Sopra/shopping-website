import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@mui/icons-material'
import {mobile} from "../reponsive"
import { NavLink } from "react-router-dom";
const Container = styled.div`
height: 60px;

${mobile ({ backgroundcolor:"red" })};


`;
const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   justify-content: space-between;
   align-items:center;
   ${mobile ({padding: "10px 0px"})}
`;

const Left = styled.div`
flex:1;
display:flex;
align-items: center;
`;

const Language = styled.span`
font-size:14px;
cursor: pointer;
${mobile ({display: "none"})}
`;

const SearchContainer = styled.div`
border:0.5px solid lightgray;
display:flex;
align-items:center;
padding:5px;
margin-left:25px;
`;
const Input = styled.input`
 border:none;
 ${mobile ({width: "50px"})}
`;
const Logo = styled.h1`
font-weight:bold;

${mobile ({fontSize: "24px"})}
`;
const Center = styled.div`
flex:1;
text-align:center;
`;
const Right = styled.div`
flex:1;
display: flex;
align-items:center;
justify-content:flex-end;
${mobile ({flex:2,justifyContent: "center"})}
`;
const MenuItem = styled.div`
font-size:14px;
cursor: pointer;
margin-left:25px;
${mobile ({fontSize: "12px", marginLeft: '10px'})}
`;
const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? 'black' : 'black',
      textDecoration: isActive ? "none" : "none"
    };
  };
  
  return (
    
    <Container>
      
   <Wrapper>
   <Left>
    <Language>EN</Language>
    <SearchContainer>
        <Input placeholder='Search' />
        <Search style={{color:"gray",fontSize:16}}/>
    </SearchContainer>
   </Left>
   <Center>
    <Logo>
    <NavLink style={navLinkStyles} to="/">
    Sopra's
      </NavLink> 
      </Logo>
   </Center>
   <Right>
   <MenuItem>
    <NavLink style={navLinkStyles} to="/register">
          Register
      </NavLink> 
        </MenuItem> 
   <MenuItem>
   <NavLink style={navLinkStyles} to="/login">
         Sign in
      </NavLink> 
   </MenuItem>
   <MenuItem>
   <NavLink style={navLinkStyles} to="/cart">
   <ShoppingCartOutlined/>
      </NavLink> 

    
   </MenuItem>

   </Right>
    </Wrapper>  
    </Container>
   
      

     
   
    
  )
}

export default Navbar
