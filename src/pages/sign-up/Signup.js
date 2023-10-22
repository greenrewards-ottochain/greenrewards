import React, { useState, useEffect } from "react";
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
import SuccessPage from "../../components/success/SuccessPage";
import { Navigate } from "react-router-dom";
import axios from 'axios';







const Signup = () => {
    const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked);
    };

    const [formData, setFormData] = useState({
        name: "",
        emailAddress: "",
        password: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isLoginSuccess, setIsLoginSuccess] = useState(false);
    const [isRedirecting, setIsRedirecting] = useState(false); // New state to track redirecting

    useEffect(() => {
        if (isLoginSuccess) {
            const redirectTimer = setTimeout(() => {
                setIsRedirecting(true); // Start redirecting after 2.5 seconds
            }, 3000);

            return () => clearTimeout(redirectTimer);
        }
    }, [isLoginSuccess]);

    ;

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post(
                "https://greenrewards-ottochain.onrender.com/users/signUp",
                formData
              );

            if (response.status === 200) {
                console.log("Registration successful");
                setIsLoginSuccess(true);
                setIsLoading(false);
            } else {
                console.error("Registration failed");
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };




    return (
        <>
            {isRedirecting ? ( // Conditional rendering for redirecting
                <Navigate to="/verify-account" /> // Replace with the actual home page route
            ) : isLoginSuccess ? (
                <SuccessPage text="Registration Successful" /> // Replace with the actual successPage component
            ) : (
                <SignupParent>
                    <SignupWrapper>
                        <Wrapper>

                            <form onSubmit={handleSubmit} >
                                <Link to='/'>  <CloseButton /></Link>
                                <FormHeader>
                                    <h3>CREATE YOUR ACCOUNT</h3>

                                    <img src={arrow} alt="arrow" marginLeft="2rem" />
                                </FormHeader>
                                <FormTextInput
                                    labelName="Name"
                                    placeholder="e.g Devon Lane"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required

                                />
                               
                                <FormTextInput
                                    labelName="Email address"
                                    placeholder="e.g devonlane@gmail.com"
                                    name="emailAddress"
                                    value={formData.emailAddress}
                                    onChange={handleChange}
                                    required
                                />

                                <FormTextInput
                                    labelName="Password"
                                    placeholder="********"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />




                                <Checkbox
                                    id="checkbox"
                                    label="By signing up you accept GreenReward’s Terms of Service and Privacy Policy."
                                    value={checked}
                                    onChange={onChange}
                                    fontSize='0.5rem'
                                />

                                <button type='submit' className='w-3/4 px-8 py-2 mb-2 font-semibold rounded-lg text-white bg-[#427142]'>{isLoading ? 'Loading...' : 'Sign Up'}</button>

                                <p>Already have an account? <Link to="/sign-in" style={{ textDecoration: 'none', color: '#015C28' }}>Sign in</Link></p>

                            </form>
                            <div style={{ height: '50rem', width: '45rem', marginRight: '2rem' }}><img src={signupimage} alt='signupimage' /></div>

                        </Wrapper>
                    </SignupWrapper>
                </SignupParent>
            )}
        </>

    );
};

export default Signup;