import React from "react";
import {
    SigninParent,
    SigninWrapper,
    Wrapper,
    FormHeader
} from "./signin.styles";
import { Link } from "react-router-dom";
import signupimage from "../../assets/signupimage.svg";
import FormTextInput from "../../components/custom-input/FormTextInput";
import arrow from "../../assets/arrow.png";
import FormButton from "../../components/custom-button/FormButton";







const Signin = () => {


    return (
        <SigninParent>
            <SigninWrapper>
                <Wrapper>

                    <form>
                        <FormHeader>
                            <h3>Welcome Back GreenHero</h3>

                            <img src={arrow} alt="arrow" />
                        </FormHeader>

                        <FormTextInput
                            labelName="Email address"
                            placeholder="e.g devonlane@gmail.com"
                            name="emailAddress"

                        />

                        <FormTextInput
                            labelName="Password"
                            placeholder="********"
                            name="password"

                        />



                        <FormButton
                            text="Sign in"
                            color="#fff"
                            borderColor="#427142"

                        />

                        <p>Don't have an account?<Link to="/sign-up" style={{ textDecoration: 'none', color: '#015C28' }}>Sign up</Link></p>


                    </form>

                    <div style={{ height: '50rem', width: '45rem', marginRight: "2rem" }}><img src={signupimage} alt="signupimage" /></div>
                </Wrapper>

            </SigninWrapper>
        </SigninParent>

    );
};

export default Signin;