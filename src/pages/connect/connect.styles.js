import styled from "styled-components";
import { devices } from "../../utils/device";


export const ConnectParent = styled.div`
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

export const ConnectWrapper = styled.div`
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
    margin-left:2rem;
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
 
  & link {
        color: #FFF;
    }

  & link:hover {
         color: #00F;
      }
    

     
    `;


export const FormHeader = styled.div`
    width: 80%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    align-content: center;
    color:#0F160F;
    margin-top:5rem;
    
& img {
    margin-left:1rem;
    margin-top:1rem;
    margin-bottom:2rem;
}
   
    `;



     
   
   


  