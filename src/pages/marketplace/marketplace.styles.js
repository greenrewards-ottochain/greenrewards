import styled from "styled-components";
import {device} from "../../utils/device";

export const MarketParent = styled.div`
    width: 100vw;
    height: 240vh;
    display: flex;
    flex-direction: column;
    background:#fff;

     `;

export const MarketWrapper = styled.div`
    width: 100vw;
    height:220vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background:#fff;

    @media ${device.laptopL} { 
      max-width: 1400px;
      }
  
   @media ${device.desktop} {
      max-width: 2500px;
      }
             
      


    `;


    export const SummaryContainer = styled.section`
      width: 100%;
      height: 40%;
      display: flex;
      gap: 1.5rem;
      justify-content: space-around;
      align-items: center;
      margin-top:5rem;
    `;
    




export const SummaryCard = styled.div`
      width: 25%;
      height: 110%;
      display: flex;
      flex-direction: column;
      padding: 1rem 1rem;
      background: #fff;
      border: 1px solid #0F160F;
      border-radius: 10px;
      
      
      & p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3rem;
        color: #0F160F;
        margin-left:1rem;
      }
    
      & h1 {
        font-weight: 700;
        font-size: 1.1rem;
        color:  #0F160F;
        margin-left:1rem;

      }

      & h3 {
        font-weight: 500;
        font-size: 1rem;
        color:  #0F160F;
        margin-left:1rem;
      }

      

      
    `;
export const MButton = styled.button`
display: flex;
background:#fff;
width:15rem;
border: 1px solid #0F160F; 
border-radius:5px;
color:#427142;
height: 2.5rem;
align-items: center;
justify-content: center;
margin-left: 3rem;


`;

export const SummaryContainer2 = styled.section`
      width: 100%;
      height:40%;
      display: flex;
      gap: 1.5rem;
      justify-content: space-around;
      align-items: center;
      margin-top:6rem;
    `;
    
    export const SubfooterWrapper = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    margin-top:6rem;
    background:#2A382A;
    
    
     
    `;
    
    

  