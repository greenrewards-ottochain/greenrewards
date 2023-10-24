import styled from "styled-components";
import {devices} from "../../utils/device";


export const SellParent = styled.div`
    width: 100vw;
    height: 100vh;
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

export const SellWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background:#fff;

  

       
        

    `;


    export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background:#fff;
    margin-left: 2rem;
    color:#0F160F;
   
    & h3 {
        margin-top:2rem;
        font-size:1.5rem;
        font-weight:650;
        line-height:0.1rem;
        color:#0F160F;
        margin-left:5rem;
    
        
    }
   
    & form {
        width: 60%;
        height: 80%;
        margin-left: 8rem;
        margin-top:3rem;
        color:#0F160F;
        
    }
    & h4 {
        margin-top:1rem;
        font-size:1rem;
        font-weight:450;
        line-height:1rem;
        color:#fff; 
    }
    
    


   

    `;


    export const FormHeader = styled.div`
    width: 70%;
    height: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    align-content: center;
    color:#0F160F;
    font-size:1.2rem;
    margin-top:2rem;
    
    & img {
        margin-left:3rem;
        margin-bottom:1rem;
        margin-top:1rem;
    }

    
    `;


    export const Select = styled.select`
    width: 75%;
    height:10%;
    background: #fff;
    color: #0F160F;
    border:1px solid #0F160F;
    border-radius: 5px;
    margin-top: 1rem;
    margin-bottom: 1rem;
   
  
         option {
           color: #0F160F;
           background: #fff;
           font-weight: 200;
           display: flex;
           min-height: 20px;
           padding: 1px 2px 1px;
         }
  `;
    
   
   


  