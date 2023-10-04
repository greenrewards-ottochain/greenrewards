import React from "react";
import {
    WelcomeParent,
    WelcomeWrapper,
    SummaryCard,
    SummaryContainer,
    Header
    } from "./welcome.styles";








const Welcome = () => {


    return (
        <WelcomeParent>
            <WelcomeWrapper>
                <Header><h2>Welcome to GreenRewards,
                    <br></br>where environmental consciousness meets blockchain
                    <br></br>innovation</h2>

                </Header>
                <SummaryContainer>
                    <SummaryCard >
                        <hr/>
                        <h3>Tangible Rewards</h3>
                        <p>Recycling is now more rewarding
                            <br></br>than ever. Earn tokens for every
                            <br></br>eco-conscious action you take
                        </p>

                    </SummaryCard>
                    <SummaryCard>
                        <hr/>
                        <h1>Be a Part of the Future</h1>
                        <p>GreenRewards harnesses the potential
                            <br></br>of blockchain and technology for a better
                            <br></br>world. </p>
                    </SummaryCard>
                    <SummaryCard >
                        <hr/>
                        <h1>Simple and Engaging</h1>
                        <p>GreenRewards makes sustainability
                            <br></br>accessible and engaging. Embrace
                            <br></br>the future of sustainability </p>
                    </SummaryCard>
                </SummaryContainer>
               
            </WelcomeWrapper>



        </WelcomeParent>




    )





}


export default Welcome;