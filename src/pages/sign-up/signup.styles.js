import styled from "styled-components";
import { devices } from "../../utils/device";


export const SignupParent = styled.div`
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

export const SignupWrapper = styled.div`
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
    
    & p {
        color:#0F160F;
        line-height:1.5rem;
    }
    `;


    export const FormHeader = styled.div`
    width: 80%;
    height: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    align-content: center;
    color:#0F160F;
    font-size:1.2rem;
    margin-top:5rem;
    
& img{
    margin-top:1rem;
}
    
    `;



    
   
   


  