import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from '../../utils/device';

export const SidebarParent = styled.aside`
  width: 20%;
  height: 100vh;
  background: #DBECDB;
  border-right: 1px solid #DBECDB;
  border-bottom: 1px solid #DBECDB;
  display: flex;
  flex-direction: column;
  }

  @media ${device.laptop} {
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
  padding: 0.5rem;
  display:flex;
  flex-direction:row;

  `;

  export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  color: #000;
  align-items: center;
  padding: 0.5rem;

  

  @media ${device.laptop} {
    text-decoration: none;
    display: flex;
    width: 100%;
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
      font-size: 1.3rem;
      line-height: 2rem;
      
    }

    &.active {
      background: #CF9D3A;
      color: #fff;
    }

    &.active span {
      background: #CF9D3A;
      color: #fff;
    }
  }
`;

export const SidebarLinksContainer = styled.section`
  display: flex;
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

    

  @media ${device.laptop} {
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