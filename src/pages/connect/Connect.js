import React from "react";
import {
    ConnectParent,
    ConnectWrapper,
    Wrapper,
    FormHeader
} from "./connect.styles";
import signupimage from "../../assets/signupimage.svg";
import arrow from "../../assets/arrow.png";
import { ConnectButton } from '@rainbow-me/rainbowkit';






const Connect = () => {
   

    

    return (
        <ConnectParent>
            <ConnectWrapper>
                <Wrapper>

                    <form>
                        <FormHeader>
                            <h3>CONNECT YOUR WALLET</h3>

                            <img src={arrow} alt="arrow" />
                            <ConnectButton/>
                        </FormHeader>

                       

                       

                        


                    </form>

                    <div style={{ height: '50rem', width: '50rem', marginRight: "2rem" }}><img src={signupimage} alt="signupimage" /></div>
                </Wrapper>

            </ConnectWrapper>
        </ConnectParent>

    );
};

export default Connect;