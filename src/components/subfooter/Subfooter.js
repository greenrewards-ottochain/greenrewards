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
    SocialDiv,
    GreenDiv
} from "./subfooter.styles";
import whitelogo from "../../assets/whitelogo.png";
import twitter from "../../assets/twitter.png";
import discord from "../../assets/discord.png";
import mail from "../../assets/mail.png";


const Subfooter = () => {
    return (
<div className='flex flex-col gap-10 tab:flex-row tab:justify-between tab:gap-40'>
        <SubfooterParent>
            <SubcenterWrapper>

                <OthersContainer>
                    <GreenDiv>
               <h1>© 2023 Greenreward</h1> 
               </GreenDiv>
                    <ProductDiv>
                        <h1>Privacy Policy</h1>
                        
                    </ProductDiv>
                    <CompanyDiv>
                        <h1>Term of Use</h1>
                        
                    </CompanyDiv>
                    <ResourcesDiv>
                        <h1>Contact Us</h1>
                        

                    </ResourcesDiv>
                    <ConnectDiv>
                        <LogoContainer>
                            <img src={whitelogo} alt="whitelogo" width={50} />
                        </LogoContainer>
                        <h6>Where environmental consciousness
                            <br></br>meets blockchain innovation</h6>
                        <SocialDiv>
                            <img src={twitter} alt="twitter" />
                            <img src={discord} alt="discord" />
                            <img src={mail} alt="mail" />
                        </SocialDiv>

                    </ConnectDiv>
                </OthersContainer>
            </SubcenterWrapper>
        </SubfooterParent>
        </div>
    )



}

export default Subfooter;