import React from "react";
import {
  ProductDiv,
  ResourcesDiv,
  SubcenterWrapper,
  ConnectDiv,
  SubfooterParent,
  LogoContainer,
  OthersContainer,
  CompanyDiv,
  GreenDiv
} from "./subfooter.styles";
import whitelogo from "../../assets/whitelogo.png";
import { FaTwitter } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import {Link} from "react-router-dom";

const Subfooter = () => {
  return (
    <div className='bg-[#2A382A] flex flex-col gap-10 tab:flex-row tab:justify-between tab:gap-40'>
     <SubfooterParent>
      <SubcenterWrapper>
        <OthersContainer>
      <GreenDiv>
              <h1>© 2023 Greenreward</h1>
              </GreenDiv>
            <ProductDiv>
              <Link style={{ textDecoration: 'none', color: 'white' }}><h1>Privacy Policy</h1></Link>

            </ProductDiv>
            <CompanyDiv>
             <Link style={{ textDecoration: 'none', color: 'white' }}> <h1>Term of Use</h1> </Link>

            </CompanyDiv>
            <ResourcesDiv>
             <Link  style={{ textDecoration: 'none', color: 'white' }}> <h1>Contact Us</h1></Link>


            </ResourcesDiv>
            <ConnectDiv>
              <LogoContainer>
               <Link to='/' style={{ textDecoration: 'none', color: 'white' }}> <img src={whitelogo} alt="whitelogo" width={50} /></Link>
              </LogoContainer>
              <h6>Where environmental consciousness
                <br></br>meets blockchain innovation</h6>
              <div className="flex flex-row cursor-pointer space-x-5 text-white">
                <FaTwitter />
                <SiDiscord />
                <HiOutlineMail />
              </div>

            </ConnectDiv>
            </OthersContainer>
          </SubcenterWrapper>
      </SubfooterParent>
    </div>
  )



}

export default Subfooter;