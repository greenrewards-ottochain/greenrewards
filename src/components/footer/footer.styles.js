import styled from "styled-components";

export const FooterParent = styled.div`
    width: 100vw;
    height: 30vh;
    display: flex;
    background:#2A382A;

    
`;

export const CenterWrapper = styled.div`
    width: 100vw;
    height: 30vh;
    display: flex;
    background:#2A382A;
   

    
    
`;

export const SubscribeContainer = styled.div`
    width: 70vw;
    height: 50%;
    margin-top:3rem;
    margin-left:25rem;
  
    
    
    
    & h3 {
      margin-top: 1rem;
      color: #ffffff;
      margin-left: 6rem;
      font-size:1.8rem;
      font-weight:700;
     
      
      
  }

  
  & h4 {
    line-height:1rem;
    color: #ffffff;
    margin-left: 5rem;
    font-weight:200;
    
}
    & p {
      line-height:1rem;
      color: #ffffff;
      margin-left: 5rem;
      margin-bottom:2rem;
      
  }
    `;

   





export const ButtonContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
margin-left: 1rem;

`;


export const SearchBarContainer = styled.div`
  display: flex;
  width:  40%;
  height: 50%;
  margin-left: 3rem;
  
`;

export const SearchBarForm = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #fff;
  border-radius: 5px;
  height: 90%;
 background: #2A382A;

  & .search-input {
    border: 0;
    outline: none;
    background: #2A382A;
    color: #fff;
    font-size: 1rem;
    margin-left:3rem;
    

  }
  & .search-input::placeholder {
    color: #fff;
    font-size: 0.7rem;
    margin-left: 1rem;
    margin-top: 2rem;
  }
  
`;

export const Button = styled.button`
background:#8BC34A;
width:7rem;
border: 1px solid #8BC34A; 
border-radius:5px;
color:#000000;
height:2.5rem;
align-items: center;
margin-top:0.275rem;
margin-bottom:1rem;
font-size: 1rem;
display:flex;
margin-left:10rem;


`;


