import styled from "styled-components";


export const WelcomeParent = styled.div`
    width: 100vw;
    height: 55vh;
    display: flex;
    flex-direction: column;
    background:#fff;

     `;

export const WelcomeWrapper = styled.div`
     width: 100vw;
     height: 55vh;
     display: flex;
     flex-direction: column;
     background:#fff;
 
    
      `;

export const SummaryContainer = styled.section`
      width: 100%;
      height: 50%;
      display: flex;
      gap: 1.5rem;
      justify-content: space-around;
      align-items: center;
      
    `;
    
export const Header = styled.div`
    width: 70%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content:left;
    align-content: left;
    margin-left:3rem;

    & h2 {
        color: #427142;
        font-size:2rem;
        line-height:2.5rem;
        font-weight:700;
     }

     & h3 {
        color: #6BBE45;
        font-size:2rem;
        line-height:2.5rem;
        font-weight:500;
     }
       
    `;



export const SummaryCard = styled.div`
      width: 25%;
      height: 50%;
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
        font-size: 1rem;
        color: #0F160F;
        margin-left:1rem;
      }

      & h3 {
        font-weight: 500;
        font-size: 1rem;
        color: #0F160F;
        margin-left:1rem;
      }

      hr{
        color: #0F160F;
        width: 90%;
      }

      
    `;
