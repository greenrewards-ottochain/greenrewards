import styled from "styled-components";


export const SellerParent = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const SellerWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  
`;



export const UpperContainer = styled.section`
  width: 80%;
  height: 40vh;
  display: flex;
  border-radius: 12px;
  margin-top: 3rem;
  margin-left:1rem;

 
  
`;

export const TextContainer= styled.div`
       width: 80%;
       position: absolute;
       top: 30%;
       left: 50%;
       margin-left:10rem;
       transform: translate(-50%, -50%);
       color:#fff;
       align-content:center;
       justify-content: center;
       
       & h1{
       font-weight:700;
       line-height:1.5rem;
       font-size:1.2rem;
       font-family: Sans-Serif;
       color:  #fff;
       
       }
       
       & h2{
           font-weight:200;
           line-height:1.5rem;
           font-size:1rem;
           font-family: Sans-Serif;
           color:  #fff;
           
           
           }
       
       
       
       
       `;    

export const Button = styled.button`
       display: flex;
       background:#fff;
       width:8rem;
       border: 1px solid #fff; 
       border-radius:5px;
       color:#427142;
       height: 2.5rem;
       align-items: center;
       justify-content: center;
       
       
       
       `;

       export const LowerContainer = styled.section`
       width: 60%;
       height: 40vh;
       display: flex;
       border-radius: 12px;
       margin-top: 3rem;
       margin-left:1rem;
     
      
       
     `;   