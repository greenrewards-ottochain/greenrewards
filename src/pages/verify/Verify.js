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
import { useNavigate } from "react-router-dom";






const Verify = () => {
    const navigate = useNavigate();

    const routeToNextPage = () => {
        navigate("/connect");

    };

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
                        <div class="flex flex-col space-y-16">
                            <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                <div class="w-16 h-16 ">
                                    <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-gray-900" type="text" name="" id="" />
                                </div>
                                <div class="w-16 h-16 ">
                                    <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-gray-900" type="text" name="" id="" />
                                </div>
                                <div class="w-16 h-16 ">
                                    <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-gray-900" type="text" name="" id="" />
                                </div>
                                <div class="w-16 h-16 ">
                                    <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-gray-900" type="text" name="" id="" />
                                </div>
                            </div>
                        </div>



                        <FormButton
                            text="Verify"
                            color="#fff"
                            borderColor="#2B452B"
                            handleClick={routeToNextPage}
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