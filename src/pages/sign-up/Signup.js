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
import Checkbox from "../../components/checkbox/Checkbox";
import { CloseButton } from '@chakra-ui/react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import greenRewardABI from "../../contract/greenRewardABI.json";







const Signup = () => {
    const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked);
    };
    const { config } = usePrepareContractWrite({
        address: '0x25d3195984A693886103312eA3FA53D738c951B7',
        abi: greenRewardABI,
        functionName: 'createProfile',
    })
    const { data, isLoading, isSuccess, write } = useContractWrite(config)




    return (

        <SignupParent>
            <SignupWrapper>
                <Wrapper>

                    <form  >
                        <Link to='/'>  <CloseButton /></Link>
                        <FormHeader>
                            <h3>CREATE YOUR ACCOUNT</h3>

                            <img src={arrow} alt="arrow" marginLeft="2rem" />
                        </FormHeader>
                        <FormTextInput
                            labelName="Name"
                            placeholder="e.g Devon Lane"
                            name="name"

                            required

                        />

                        <FormTextInput
                            labelName="Email address"
                            placeholder="e.g devonlane@gmail.com"
                            name="emailAddress"
                            required
                        />

                        <FormTextInput
                            labelName="Password"
                            placeholder="********"
                            name="password"
                            required
                        />




                        <Checkbox
                            id="checkbox"
                            label="By signing up you accept GreenReward’s Terms of Service and Privacy Policy."
                            value={checked}
                            onChange={onChange}
                            fontSize='0.5rem'
                        />

                        <button type='submit' className='w-3/4 px-8 py-2 mb-2 font-semibold rounded-lg text-white bg-[#427142]'
                            disabled={!write} onClick={() => write?.()} >Sign Up</button>
                        {isLoading && <div>Check Wallet</div>}
                        {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}

                        <p>Already have an account? <Link to="/connect-wallet" style={{ textDecoration: 'none', color: '#015C28' }}>Connect Wallet</Link></p>

                    </form>
                    <div style={{ height: '50rem', width: '50rem' }}><img src={signupimage} alt='signupimage' /></div>

                </Wrapper>
            </SignupWrapper>
        </SignupParent>


    );
};

export default Signup;