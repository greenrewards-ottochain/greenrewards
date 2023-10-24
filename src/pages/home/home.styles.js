import styled from "styled-components";
import { devices } from "../../utils/device";


export const HomeParent = styled.div`
    width: 120vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background:#DBE1D4;

`;

export const HomeWrapper = styled.div`
     width: 120vw;
     height: 150vh;
     display: flex;
     flex-direction: column;
     background:#DBE1D4;

 
                               
    
`;



export const BarWrapper = styled.div`
      width: 100vw;
      height: 10vh;
      display: flex;
      flex-direction: column;
      margin-top:2rem;
      margin-left:2rem;
      margin-bottom:3rem;

      
                                 
      `;

export const CentreWrapper = styled.div`
padding: 40px 32px;
position: relative;
display: flex;
flex-direction: column;
gap: 28px;

@media ${devices.md} {
   padding: 0px 40px 132px 40px;
 }
 @media ${devices.tab} {
   flex-direction: row;
 }     
                              
 
   
      `;



export const TextContainer = styled.div`
width: 120vw;
position: absolute;
top: 55%;
left: 45%;
margin-left:30rem;
transform: translate(-50%, -50%);
color:#fff;
align-content:center;
justify-content: center;

 & h1 {
    font-size: 3rem;
    color: #0F160F;
    font-weight: 600;
    line-height:1rem;
 }

 & h2 {
    font-size: 3rem;
    color: #0F160F;
    font-weight: 600;
    line-height:1rem;
    margin-left: 2rem;
 }

 & h3{
    font-size:1.3rem;
    color:#0F160F;
    font-weight:500;
    line-height:1rem;
    margin-left: 7rem;
 }

 & h4{
   font-size:1.3rem;
   color:#0F160F;
   font-weight:500;
   line-height:1rem;
   margin-left:15rem;
}

@media ${devices.md} {
   & h1 {
     font-size: 3rem;
   }
   & p {
     font-size: 1.25rem;
   }
 }

 @media ${devices.tab} {
   flex-basis: 56%;
 }

 @media ${devices.xl} {
   & h1 {
     font-size: 5.5rem;
   }
 }
`;

export const ButtonContainer = styled.div`
    display: flex;
    margin-top:2rem;
    margin-left:16rem;
    
    @media ${devices.tab} {
      width: 80%;
    }
    
`;

export const GButton = styled.button`
display: flex;
background:#427142;
width:10rem;
border: 1px solid #427142; 
border-radius:5px;
color:#fff;
height: 3rem;
align-items: center;
justify-content: center;


`;

export const LButton = styled.button`
display: flex;
background: #DBE1D4;
width:10rem;
border: 1px solid  #0F160F; 
border-radius:5px;
color:#427142;
height: 3rem;
align-items: center;
justify-content: center;
margin-left:1rem;


`;

export const ImageContainer = styled.section`
 width: 100%;
 height: 50%;
 display: flex;
 gap: 1.5rem;
 justify-content: space-around;
 align-items: center;
 margin-top: 25rem;

 @media ${devices.tab} {
   flex-basis: 44%;
 }
`;

export const WelcomeWrapper = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#fff;
align-items: center;
margin-top: 5rem;
`;    

export const HowContainer = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#0F160F;
align-items: center;
margin-top:30rem;
`;  

export const RecycleContainer = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#0F160F;
align-items: center;
margin-top:25rem;
`;  


export const FooterWrapper = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#0F160F;
align-items: center;
 
 
`;

export const SubfooterWrapper = styled.div`
width: 100%;
height: 30%;
display: flex;
background:#0F160F;
align-items: center;
margin-top:3rem;

 
`;

