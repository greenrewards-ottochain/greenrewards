import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { devices } from '../../utils/device';

export const SidebarParent = styled.aside`
  width: 20%;
  height: 100vh;
  background: #DBECDB;
  border-right: 1px solid #DBECDB;
  border-bottom: 1px solid #DBECDB;
  display: flex;
  flex-direction: column;
  }

  @media ${devices.lg} {
    width: 10rem;
    height: 100%;
    background: #DBECDB;
    border-right: 1px solid #DBECDB;
    display: flex;
    flex-direction: column;
    transition: 0.5s ease-in-out;
    
    &:hover {
      width: 20%;
      display: flex;
      flex-direction: column;
      transition: 0.5s ease-in-out;
      opacity: 1;

      & h1 {
        opacity: 1;
        transition: 0.5s ease-in-out;
      }

      & h3 {
        opacity: 1;
        transition: 0.5s ease-in-out;
      }
    }
  }
`;

export const SidebarLogoContainer = styled.div`
  align-items: center;
  padding: 1rem;
  display:flex;
  flex-direction:row;
  margin-top: 1rem;

  & img{
    width:10rem;
  }

  `;

  export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  color: #000;
  align-items: center;
  padding: 0.5rem;

  

  @media ${devices.lg} {
    text-decoration: none;
    display: flex;
    width: 90%;
    align-items: center;
    color: #000;
    padding: 0.2rem 0.2rem;

    & span {
      margin-left: 2rem;
      margin-right: 0.5rem;  
    }

    & h3 {
      font-family: "Inter";
      font-weight: 400;
      font-size: 1rem;
      line-height: 1rem;
      
    }

    &.active {
      background: #427142;
      color: #fff;
    }

    &.active span {
      background: #DBECDB;
      color: #fff;
    }
  }
`;

export const SidebarLinksContainer = styled.section`
 display:flex;
  flex-direction: column;
  flex: 100%;
  margin-top: 0.7rem;
 
`;

export const LogoutArea = styled.div`
    flex: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem;
    color: #000000;

    

  @media ${devices.lg} {
    margin-bottom: 1rem;
    padding: 1rem 1rem;

    & span {
      margin-left: 1rem;
      margin-right: 0.5rem;
    }

    & h3 {
      font-family: "Inter";
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 1.5rem;
     
    }
  }
`;