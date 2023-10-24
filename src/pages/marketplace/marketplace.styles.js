import styled from "styled-components";
import { devices } from "../../utils/device";


export const MarketParent = styled.div`
    width: 100vw;
    height: 240vh;
    display: flex;
    flex-direction: column;
    background:#fff;

    @media ${devices.md} {
      padding: 0px 40px 132px 40px;
    }
    @media ${devices.tab} {
      flex-direction: row;
    }     
     `;

export const MarketWrapper = styled.div`
    width: 100vw;
    height:220vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background:#fff;

   
             
      


    `;

    export const BarWrapper = styled.div`
      width: 120vw;
      height: 10vh;
      display: flex;
      flex-direction: column;
      margin-bottom:7rem;

      
                                 
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
        font-weight: 500;
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

      & b {
        font-weight:500;
      }

     


      
    `;



    export const SummaryCard2 = styled.div`
    width: 45%;
    height: 90%;
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
    background: #fff;
   
    
    & p {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.3rem;
      color: #0F160F;
      margin-left:1rem;
    }
  
    & h1 {
      font-weight: 500;
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

    & b {
      font-weight:500;
    }

    & h2 {
      font-weight: 500;
      font-size: 1.1rem;
      color:  #0F160F;
      margin-left:1rem;
      margin-top:5rem;

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

export const EButton = styled.button`
display: flex;
background:#427142;
width:30rem;
border: 1px solid #0F160F; 
border-radius:5px;
color:#fff;
height: 2.5rem;
align-items: center;
justify-content: center;
margin-left: 1rem;
margin-top:2rem;


`;

export const AButton = styled.button`
display: flex;
background:#fff;
width:30rem;
border: 1px solid #0F160F; 
border-radius:5px;
color:#427142;
height: 2.5rem;
align-items: center;
justify-content: center;
margin-left: 1rem;
margin-top:2rem;


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
    margin-top:11.7rem;
    background:#2A382A;
    
    
     
    `;
    
    

  