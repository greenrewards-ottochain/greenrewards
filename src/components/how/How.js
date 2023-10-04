import React from "react";
import {
    HowParent,
    HowWrapper,
    Header,
    SummaryContainer1,
    SummaryWrapper,
    SummaryContainer3
} from "./how.styles";

import howimage from "../../assets/howimage.png";








const How = () => {


    return (
        <HowParent>
            <HowWrapper>
                <Header><h2>How GreenRewards work</h2>

                </Header>
                <SummaryWrapper>
                    <SummaryContainer3>
                        <p><b>1. Sign Up and Get Started:</b> Begin by signing up on the
                            <br></br>GreenRewards platform. Join a community of eco-conscious
                            <br></br>individuals dedicated to making a positive impact on the environment</p>
                        <p><b>2. Submit Your Recycling Proof:</b> After signing up, you can
                            <br></br>start submitting evidence of your recycling activities.
                            <br></br>This might include photos or videos of recycled items</p>
                        <p><b>3. System Verification: </b>Our system ensures the validity of
                            <br></br>your submitted proof through verification processes. We're
                            <br></br>committed to maintaining the integrity of your efforts</p>
                        <p><b>4.Claim Your Tokens:</b> Once your recycling activities are
                            <br></br>verified, you'll earn tokens as a reward. These tokens are
                            <br></br>a recognition of your commitment to sustainability and
                            <br></br>positive environmental actions. Connect your wallet to earn </p>
                    </SummaryContainer3>
                    <SummaryContainer1>
                        <img src={howimage} alt="howimage" />
                    </SummaryContainer1>

                </SummaryWrapper>

            </HowWrapper>



        </HowParent>




    )





}


export default How;