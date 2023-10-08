import React, { useState } from "react";
import {
    SignupParent,
    SignupWrapper,
    Wrapper,
    FormHeader
} from "./signup.styles";
import { Link } from "react-router-dom";
import signupimage from "../../assets/signupimage.svg";
import FormTextInput from "../../components/custom-input/FormTextInput";
import arrow from "../../assets/arrow.png";
import FormButton from "../../components/custom-button/FormButton";
import Checkbox from "../../components/checkbox/Checkbox";
import { CloseButton} from '@chakra-ui/react';







const Signup = () => {
    const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked);
    };




    return (
        <SignupParent>
            <SignupWrapper>
                <Wrapper>

                    <form>
                    <Link to='/'>  <CloseButton/></Link>
                        <FormHeader>
                            <h3>CREATE YOUR ACCOUNT</h3>

                            <img src={arrow} alt="arrow" marginLeft="2rem" />
                        </FormHeader>
                        <FormTextInput
                            labelName="Name"
                            placeholder="e.g Devon Lane"
                            name="name"

                        />
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
                       
                         
                       
                        
                        <Checkbox
                            id="checkbox"
                            label="By signing up you accept GreenReward’s Terms of Service and Privacy Policy."
                            value={checked}
                            onChange={onChange}
                            fontSize='0.5rem'
                        />
                        <FormButton
                            text="Continue"
                            color="#fff"
                            borderColor="#2B452B"

                        />

                        <p>Already have an account? <Link to="/sign-in" style={{ textDecoration: 'none', color: '#015C28' }}>Sign in</Link></p>

                    </form>
                    <div style={{ height: '50rem', width: '45rem', marginRight:'2rem'}}><img src={signupimage} alt='signupimage' /></div>

                </Wrapper>
            </SignupWrapper>
        </SignupParent>

    );
};

export default Signup;