import React from "react";
import {
    VerifyParent,
    VerifyWrapper,
    Wrapper,
    FormHeader
} from "./verify.styles";
import { Link } from "react-router-dom";
import signupimage from "../../assets/signupimage.svg";
import arrow from "../../assets/arrow.png";
import FormButton from "../../components/custom-button/FormButton";







const Verify = () => {


    return (
        <VerifyParent>
            <VerifyWrapper>
                <Wrapper>

                    <form>
                        <FormHeader>
                            <h3>VERIFY YOUR ACCOUNT</h3>

                            <img src={arrow} alt="arrow" />
                        </FormHeader>

                       <p>We sent a 4-digit code to devonlane@gmail.com 
                        <br></br>Code expires in 10 minutes</p>



                        <FormButton
                            text="Verify"
                            color="#fff"
                            borderColor="#2B452B"

                        />

                        <p>Didn’t get a code?<Link style={{ textDecoration: 'none', color: '#015C28' }}>Resend Code</Link></p>


                    </form>

                    <div style={{ height: '50rem', width: '50rem', marginRight: "2rem" }}><img src={signupimage} alt="signupimage" /></div>
                </Wrapper>

            </VerifyWrapper>
        </VerifyParent>

    );
};

export default Verify;