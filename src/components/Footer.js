import { Call, Facebook, Instagram, LocationOn, Mail, Twitter, YouTube } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../reponsive';
import { NavLink } from 'react-router-dom';
const Container =styled.div`
display: flex;
${mobile ({flexDirection: "column"})}
`;
const Left =styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
margin: 20px 0px;

`;
const SocialContainer = styled.div`
display: flex;
`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color:white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;

const Center =styled.div`
flex: 1;
padding: 20px;
${mobile ({display: "none"})}

`;
const Title =styled.h3`
margin-bottom: 30px;
`;
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem = styled.li`
width: 50%;
margin-bottom:10px;
`;
const Right =styled.div`
flex: 1;
padding: 20px;

`;
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;
const Payment = styled.img`
width: 90%;
`;
const Footer = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "normal" : "normal",
      color: isActive ? 'black' : 'black',
      textDecoration: isActive ? "none" : "none"
    };
  };
  return (
    <Container>
      <Left>
      
      
        <Logo>
        <NavLink style={navLinkStyles} to="/">
        Sopra's
              </NavLink> 
          </Logo>
        <Desc>
            sopra's  is our honest attempt to create everyday chic, handcrafted apparels for the women of today: who prefer comfort & confident silhouette, but are not restricted by them.
        </Desc>
        <SocialContainer>
            <SocialIcon color='3B5999'>
                <Facebook/>
            </SocialIcon>
            <SocialIcon color='E4405F'>
             <Instagram/>
                
            </SocialIcon>
            <SocialIcon color='CD201F'>
                
                <YouTube/>
                
            </SocialIcon>
            <SocialIcon color='55ACEE'>
                
                <Twitter/>
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>
            <NavLink style={navLinkStyles} to="/">
              Home
              </NavLink> 
              </ListItem>
            <ListItem>
            
            Cart
      
              </ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>wishlist</ListItem>
            <ListItem>Terms</ListItem>
            <ListItem>Home</ListItem> 


        </List>
      </Center>
      <Right>
       <Title>Contact</Title>     
       <ContactItem>
        <LocationOn style={{marginRight:'10px'}}/>Radha ballabh marg, sanganer,jaipur</ContactItem>
       <ContactItem><Call style={{marginRight:'10px'}}/>+91 8295786455</ContactItem>
       <ContactItem><Mail style={{marginRight:'10px'}}/>sopras@gmail.com</ContactItem>
      <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  )
}

export default Footer
