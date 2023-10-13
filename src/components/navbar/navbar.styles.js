import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarParent = styled.div`
    width: 100vw;
    height: 20vh;
    display: flex;
    background:#DBE1D4;

     `;

export const NavbarWrapper = styled.div`
     width: 100%;
     height: 90%;
     display: flex;
     position: relative;
     background:#DBE1D4;
     color:#0F160F;
 
      `;


export const LogoContainer = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    
    
  

    & img {
    width: 15rem;
    margin-top:3rem;
    margin-left:1rem;
    }

    
    `;

 
export const BigLinkContainer = styled.div`
    display: flex;
    margin-left: 6rem;
    
`;

export const NavbarLink = styled(Link)`
 color:white;
 font-size: 1rem;
 font-family: sans-serif;
 text-decoration: none;
 color: #fff;
 margin-left:3rem;
 margin-top:5rem;
 

& focus{
    color: white;
}
& active{
    color: #fff;
}

`;


export const ButtonWrapper = styled.div`
display:flex;
margin-left:17rem;
margin-top: 3.5rem;


& img{
   
    margin-top:0.5rem;
    width: 1.5rem;
    height:1.5rem;
}

& dropdown {
    float: left;
    overflow: hidden;
    margin-left:1rem;
  }
 
  & dropbtn {
    font-size: 17px;    
    border: none;
    outline: none;
    color: #0F160F;
    padding: 14px 16px;
    background: #0F160F;
    font-family: inherit;
    margin: 0;
  }
  
  /* Dropdown Content (Hidden by Default) */
  & dropdown-content {
    display: none;
    position: absolute;
    background: #0F160F;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    
  }
  
  & dropdown-content.a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }
`;

export const Button = styled.button`
display: flex;
background:#427142;
width:8rem;
border: 1px solid #427142; 
border-radius:5px;
color:#ffffff;
height: 2.5rem;
align-items: center;
justify-content: center;



`;